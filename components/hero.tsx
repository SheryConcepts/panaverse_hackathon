import Sale from "./sale"

export default function Hero() {
  return (
    <div className="">
      <Sale />
      <Title />
      <Description />
      <StartShoppingButton />
      <BrandsBanner />
    </div>
  )
}

function Title() {
  return <div>Title</div>
}

function Description() {
  return <div>Sale</div>
}

function StartShoppingButton() {
  return <div>Sale</div>
}

function BrandsBanner() {
  return <div>Sale</div>
}
