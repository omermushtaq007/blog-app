import { Container, Stack } from 'react-bootstrap';

export default function Hero() {
  return (
    <Container className="pt-3  overflow-hidden">
      <Stack
        direction="horizontal"
        className="bg-primary overflow-hidden"
        gap={1}
      >
        <div className="bg-secondary col-6">danger</div>
        <div className="bg-light col-3">danger</div>
        <div className="bg-light col-3">danger</div>
      </Stack>
      <Stack
        direction="horizontal"
        className="bg-primary pt-1 overflow-hidden"
        gap={1}
      >
        <div className="bg-secondary col-3">danger</div>
        <div className="bg-light col-3">danger</div>
        <div className="bg-light col-6">danger</div>
      </Stack>
    </Container>
  );
}
