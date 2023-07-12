"use client";

import Confetti from "react-confetti";

export default function SuccessPage() {
  return (
    <div className="mx-auto w-2/3 px-20 py-10 text-center">
      <Confetti className="mx-auto" height={980} width={980} />
      <h1 className="text-h2 border-none">Congrats Your Order Is Placed</h1>
      <div className="scale-150">😀</div>
    </div>
  );
}
