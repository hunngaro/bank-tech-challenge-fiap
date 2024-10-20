export function Extract() {
  return (
    <aside className="bg-[#F5F5F5] rounded-lg py-8 px-6">
      <h1 className="text-black font-bold text-[25px]">Extrato</h1>
      <section className="grid gap-6 mt-6">
        <div className="grid gap-2 pb-2">
          <strong className="text-my-green text-[13px] font-semibold">
            Novembro
          </strong>
          <div className="flex justify-between items-center">
            <p className="text-black">Depósito</p>
            <span className="text-[13px] text-my-extract-date-color">
              18/11/2022
            </span>
          </div>
          <strong className="text-black font-semibold">R$ 150</strong>
          <hr className="w-3/4 border-b-[1px] border-b-my-green" />
        </div>
      </section>
    </aside>
  );
}
