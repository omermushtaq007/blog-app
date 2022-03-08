import Image from 'next/image';
import Link from 'next/link';

export default function Social() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      icon: '/icons/facebook-brands.svg',
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com/',
      icon: '/icons/twitter-brands.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      icon: '/icons/instagram-brands.svg',
    },
    {
      name: 'Pinterest',
      url: 'https://www.pinterest.com/',
      icon: '/icons/pinterest-brands.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      icon: '/icons/linkedin-brands.svg',
    },
  ];
  return (
    <div className="gap-3 d-flex align-items-center">
      {socialLinks.map((item, i) => (
        <Link href={item.url} key={i} passHref={true}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center"
          >
            <Image
              src={item.icon}
              alt={'Visit ' + item.name + ' Page'}
              height={18}
              width={18}
            />
          </a>
        </Link>
      ))}
    </div>
  );
}
