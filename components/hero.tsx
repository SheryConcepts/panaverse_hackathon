import Sale from "./sale";

export default function Hero() {
  return (
    <div className="container lg:py-12 lg:px-14 flex flex-col justify-center items-start py-8 px-10">
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
