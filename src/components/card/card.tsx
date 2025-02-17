"use client";
import { useState } from "react";

type Props = {
  name: string;
  number: string;
  typeCard: "fisico" | "digital";
  funcoes:  "credito" | "debito" | "credito-debito";
  status: boolean;
};

export default function Card({
  name,
  number,
  typeCard,
  funcoes,
  status,
  ...rest
}: Props) {
  const [showValue, setShowValue] = useState<boolean>(true);
  const [cardStatus, setStatus] = useState<boolean>(status);
  const [cardFunction, setFunction] = useState<string>(funcoes);

  const toggleValueVisibility = () => {
    setShowValue((prev) => !prev);
  };

  const toggleStatus = () => {
    setStatus(prev => !prev);
  };

  function formatTypeCard(typeCard: string): string {
    const cardType = typeCard.toLowerCase();
    switch (cardType) {
      case "digital":
        return "Cartão digital";
      case "fisico":
        return "Cartão físico";
      default:
        return cardType;
    }
  }
  
  function formatFunctionType(functionType: string): string {
    const typeFunction = functionType.toLowerCase();
    switch (typeFunction) {
      case "credito":
        return "Crédito";
      case "debito":
        return "Débito";
      case "credito-debito":
        return "Crédito/Débito";
      default:
        return typeFunction;
    }
  }

  function formatNumberCard(num: string): string {
    return num.includes('*') ? num : num.match(/.{1,4}/g)?.join(" ") || ""
  }


  //Referente ao button configurar, abrir dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(cardFunction);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = () => {
    setFunction(selectedType);
    handleCloseDialog();
  };

  return (
    <div className={`w-full`} {...rest}>
      <p className="text-black text-xl mb-4">{formatTypeCard(typeCard)}</p>
      <div className="flex max-md:flex-col gap-8 w-full">
        <div
          className={`card relative p-4 max-w-80 w-full h-40 rounded-lg text-white overflow-hidden 
            ${typeCard == "digital" ? "bg-my-gray" : "bg-my-blue"} 
            ${!cardStatus ? 'brightness-[0.4]' : ''}`}>
          <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.016 34.8C7.44533 34.8 8.56533 35.1413 9.376 35.824C10.1867 36.5067 10.592 37.4453 10.592 38.64C10.592 39.8347 10.1867 40.7733 9.376 41.456C8.56533 42.128 7.44533 42.464 6.016 42.464H3.008V46H1.824V34.8H6.016ZM5.984 41.424C7.09333 41.424 7.94133 41.184 8.528 40.704C9.11467 40.2133 9.408 39.5253 9.408 38.64C9.408 37.7333 9.11467 37.04 8.528 36.56C7.94133 36.0693 7.09333 35.824 5.984 35.824H3.008V41.424H5.984ZM13.3724 34.128H14.5084V46H13.3724V34.128ZM20.9173 37.52C22.0159 37.52 22.8586 37.7973 23.4453 38.352C24.0319 38.896 24.3253 39.7067 24.3253 40.784V46H23.2373V44.688C22.9813 45.1253 22.6026 45.4667 22.1013 45.712C21.6106 45.9573 21.0239 46.08 20.3412 46.08C19.4026 46.08 18.6559 45.856 18.1012 45.408C17.5466 44.96 17.2692 44.368 17.2692 43.632C17.2692 42.9173 17.5252 42.3413 18.0372 41.904C18.5599 41.4667 19.3866 41.248 20.5173 41.248H23.1892V40.736C23.1892 40.0107 22.9866 39.4613 22.5813 39.088C22.1759 38.704 21.5839 38.512 20.8053 38.512C20.2719 38.512 19.7599 38.6027 19.2692 38.784C18.7786 38.9547 18.3572 39.1947 18.0052 39.504L17.4932 38.656C17.9199 38.2933 18.4319 38.016 19.0292 37.824C19.6266 37.6213 20.2559 37.52 20.9173 37.52ZM20.5173 45.184C21.1573 45.184 21.7066 45.04 22.1653 44.752C22.6239 44.4533 22.9653 44.0267 23.1892 43.472V42.096H20.5493C19.1092 42.096 18.3892 42.5973 18.3892 43.6C18.3892 44.0907 18.5759 44.48 18.9492 44.768C19.3226 45.0453 19.8452 45.184 20.5173 45.184ZM32.1468 45.488C31.9334 45.68 31.6668 45.8293 31.3468 45.936C31.0374 46.032 30.7121 46.08 30.3708 46.08C29.5814 46.08 28.9734 45.8667 28.5468 45.44C28.1201 45.0133 27.9068 44.4107 27.9068 43.632V38.544H26.4028V37.584H27.9068V35.744H29.0428V37.584H31.6028V38.544H29.0428V43.568C29.0428 44.0693 29.1654 44.4533 29.4108 44.72C29.6668 44.976 30.0294 45.104 30.4988 45.104C30.7334 45.104 30.9574 45.0667 31.1708 44.992C31.3948 44.9173 31.5868 44.8107 31.7468 44.672L32.1468 45.488ZM34.5187 37.584H35.6547V46H34.5187V37.584ZM35.0947 35.744C34.8601 35.744 34.6627 35.664 34.5027 35.504C34.3427 35.344 34.2627 35.152 34.2627 34.928C34.2627 34.7147 34.3427 34.528 34.5027 34.368C34.6627 34.208 34.8601 34.128 35.0947 34.128C35.3294 34.128 35.5267 34.208 35.6867 34.368C35.8467 34.5173 35.9267 34.6987 35.9267 34.912C35.9267 35.1467 35.8467 35.344 35.6867 35.504C35.5267 35.664 35.3294 35.744 35.0947 35.744ZM43.4076 37.52C44.4636 37.52 45.301 37.8293 45.9196 38.448C46.549 39.056 46.8636 39.9467 46.8636 41.12V46H45.7276V41.232C45.7276 40.3573 45.509 39.6907 45.0716 39.232C44.6343 38.7733 44.0103 38.544 43.1996 38.544C42.293 38.544 41.573 38.816 41.0396 39.36C40.517 39.8933 40.2556 40.6347 40.2556 41.584V46H39.1196V37.584H40.2076V39.136C40.517 38.624 40.9436 38.2293 41.4876 37.952C42.0423 37.664 42.6823 37.52 43.4076 37.52ZM57.8358 37.584V46H56.7478V44.464C56.4491 44.976 56.0384 45.376 55.5158 45.664C54.9931 45.9413 54.3958 46.08 53.7238 46.08C52.6251 46.08 51.7558 45.776 51.1158 45.168C50.4864 44.5493 50.1718 43.648 50.1718 42.464V37.584H51.3078V42.352C51.3078 43.2373 51.5264 43.9093 51.9638 44.368C52.4011 44.8267 53.0251 45.056 53.8358 45.056C54.7211 45.056 55.4198 44.7893 55.9318 44.256C56.4438 43.712 56.6998 42.96 56.6998 42V37.584H57.8358ZM71.8174 37.52C72.8734 37.52 73.7 37.824 74.2974 38.432C74.9054 39.04 75.2094 39.936 75.2094 41.12V46H74.0734V41.232C74.0734 40.3573 73.86 39.6907 73.4334 39.232C73.0174 38.7733 72.4254 38.544 71.6574 38.544C70.7827 38.544 70.0947 38.816 69.5934 39.36C69.092 39.8933 68.8414 40.6347 68.8414 41.584V46H67.7054V41.232C67.7054 40.3573 67.492 39.6907 67.0654 39.232C66.6494 38.7733 66.052 38.544 65.2734 38.544C64.4094 38.544 63.7214 38.816 63.2094 39.36C62.708 39.8933 62.4574 40.6347 62.4574 41.584V46H61.3214V37.584H62.4094V39.12C62.708 38.608 63.124 38.2133 63.6574 37.936C64.1907 37.6587 64.804 37.52 65.4974 37.52C66.2014 37.52 66.8094 37.6693 67.3214 37.968C67.844 38.2667 68.2334 38.7093 68.4894 39.296C68.7987 38.7413 69.2414 38.3093 69.8174 38C70.404 37.68 71.0707 37.52 71.8174 37.52Z" fill="white"/>
            <path d="M0.126709 17.1746L2.44543 0.602087C3.73717 0.473482 5.53804 0.40918 7.84803 0.40918C9.87291 0.40918 11.2752 0.730693 12.0549 1.3708C12.8346 2.0109 13.1081 3.16542 12.8666 4.82852C12.692 6.02981 12.3487 6.92712 11.8396 7.51754C11.3305 8.11088 10.5711 8.45577 9.56743 8.5493L9.54416 8.66914C11.7436 8.84451 12.6368 10.3352 12.2207 13.1382C11.9647 14.8042 11.4236 15.9236 10.5944 16.4994C9.76527 17.0752 8.39498 17.3646 6.48356 17.3646C3.69644 17.3675 1.57846 17.3032 0.126709 17.1746ZM2.73346 15.304L6.12863 15.3274C7.43491 15.3274 8.35134 15.1403 8.87793 14.7633C9.40451 14.3862 9.74781 13.6467 9.90491 12.5419C10.0649 11.3582 9.93982 10.5602 9.53543 10.151C9.12813 9.74183 8.28152 9.53138 6.98978 9.51384H3.54806L2.73346 15.304ZM3.8099 7.66368H7.10906C8.25533 7.66368 9.08158 7.47077 9.58489 7.08788C10.0882 6.70499 10.417 5.98305 10.577 4.92498C10.7195 3.91659 10.5915 3.25311 10.1929 2.9316C9.79436 2.61301 8.97393 2.45225 7.73166 2.45225H4.5285L3.8099 7.66368Z" fill="white" />
            <path d="M23.2705 5.4541H25.6852C24.8241 9.26549 23.7011 12.4923 22.3133 15.1346C21.0711 17.505 19.8375 19.1856 18.6185 20.1794C17.3995 21.1732 15.9449 21.8133 14.2546 22.0997L13.824 20.4424C14.8451 20.2028 15.7354 19.8433 16.5005 19.361C17.2657 18.8816 17.9988 18.1509 18.7 17.1747H17.6235C17.257 17.1747 16.9457 17.0753 16.6926 16.8737C16.4365 16.6749 16.2765 16.3972 16.2154 16.0436L13.9694 5.45117H16.4104L18.1792 14.9387C18.2258 15.2106 18.3858 15.3479 18.6563 15.3479H19.8288C19.8928 15.2369 19.9801 15.0703 20.0906 14.8569C20.2012 14.6406 20.2739 14.5003 20.3059 14.436C21.7082 11.5073 22.6974 8.51431 23.2705 5.4541Z" fill="white" />
            <path d="M30.4417 7.25435L29.5078 13.8366C29.4292 14.3978 29.4787 14.7778 29.662 14.9765C29.8453 15.1782 30.2148 15.2776 30.7733 15.2776H32.5189L32.6149 17.078C31.9138 17.2856 31.0061 17.3908 29.8889 17.3908C28.8532 17.3908 28.1084 17.1014 27.6546 16.5256C27.2007 15.9498 27.0436 15.1256 27.1891 14.0529L28.1462 7.25435H26.0195L26.2348 5.57371L28.411 5.45388L28.9143 2.01953H31.1865L30.7093 5.45388H34.2965L34.058 7.25435H30.4417Z" fill="white"/>
            <path d="M43.9032 15.2313L44.0458 16.7921C42.914 17.2393 41.311 17.4643 39.2396 17.4643C37.2467 17.4643 35.8677 16.9411 35.1025 15.8918C34.3374 14.8425 34.0988 13.2145 34.3839 11.0048C34.6865 8.7484 35.3033 7.20514 36.2372 6.38089C37.1682 5.55665 38.7043 5.14453 40.8397 5.14453C42.658 5.14453 43.8916 5.46604 44.5462 6.10615C45.2008 6.74625 45.4393 7.69033 45.2648 8.94131C45.0728 10.0783 44.6276 10.8996 43.9265 11.4023C43.2253 11.908 42.1489 12.2149 40.7001 12.326L36.659 12.6855C36.6416 13.7903 36.8743 14.5386 37.3514 14.9302C37.8286 15.3219 38.5792 15.5177 39.5974 15.5177C40.6826 15.5177 42.1169 15.4242 43.9032 15.2313ZM36.8016 10.9551L40.7001 10.5956C41.4332 10.5489 41.9685 10.391 42.3031 10.128C42.6377 9.86493 42.853 9.40312 42.949 8.74548C43.045 7.9943 42.9199 7.52957 42.5795 7.35128C42.2362 7.17591 41.5409 7.08822 40.4877 7.08822C39.2774 7.08822 38.4192 7.33959 37.9188 7.84524C37.4125 8.34797 37.0401 9.38558 36.8016 10.9551Z" fill="white"/>
          </svg>
          <p className="mt-8 mb-1">{name}</p>
          <p 
            className={`max-w-max ${cardStatus ? 'cursor-pointer': 'cursor-not-allowed'}`} 
            onClick={cardStatus ? toggleValueVisibility : undefined}>
              {
                cardStatus ? showValue ? formatNumberCard(number) : "**********" : "**********"
              }
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button 
            className={`border-2 border-my-red enabled:hover:border-black bg-my-red enabled:hover:bg-black disabled:cursor-not-allowed transition-all py-3 text-white w-full md:w-56 rounded-lg font-bold ${!cardStatus ? 'brightness-[0.4]' : ''}`}
            disabled={!cardStatus}
            onClick={handleOpenDialog}>
            Configurar
          </button>
          <button className={`border-2 border-my-dark-red py-3 w-full md:w-56 rounded-lg font-bold ${cardStatus ? 'bg-transparent text-my-dark-red' : 'bg-my-dark-red text-white'}`} onClick={toggleStatus}>
            { cardStatus ? 'Bloquear' : 'Desbloquear' }
          </button>
          <p className="text-center text-black text-sm">Função: {cardStatus ? formatFunctionType(cardFunction) : "Inativo"}</p>
        </div>

        {isDialogOpen && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">Seleciona a função do cartão</h2>
            <select
              value={selectedType}
              onChange={handleSelectChange}
              className="border border-gray-300 rounded-md p-2 mt-2 w-full">
              <option value="credito">Crédito</option>
              <option value="debito">Débito</option>
              <option value="credito-debito">Crédito/Débito</option>
            </select>
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleCloseDialog}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
      <style jsx>{`
        .card::after {
          content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYyIiBoZWlnaHQ9IjE2NCIgdmlld0JveD0iMCAwIDE2MiAxNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpvdmVybGF5IiBvcGFjaXR5PSIwLjUiPgo8cmVjdCB4PSI0MS4wNzg1IiB5PSIxNjQuMzE0IiB3aWR0aD0iNDEuMDc4NSIgaGVpZ2h0PSI0MS4wNzg1IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNDEuMDc4NSAxNjQuMzE0KSIgZmlsbD0iI0Q5RDlEOSIvPgo8cmVjdCB4PSI0MS4wNzg1IiB5PSIxMjMuMjM2IiB3aWR0aD0iNDEuMDc4NSIgaGVpZ2h0PSI0MS4wNzg1IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNDEuMDc4NSAxMjMuMjM2KSIgZmlsbD0iI0Q5RDlEOSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHJlY3QgeD0iODIuMTU3IiB5PSIxMjMuMjM2IiB3aWR0aD0iNDEuMDc4NSIgaGVpZ2h0PSI0MS4wNzg1IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgODIuMTU3IDEyMy4yMzYpIiBmaWxsPSIjRDlEOUQ5IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cmVjdCB4PSI0MS4wNzg1IiB5PSI4Mi4xNTcyIiB3aWR0aD0iNDEuMDc4NSIgaGVpZ2h0PSI0MS4wNzg1IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNDEuMDc4NSA4Mi4xNTcyKSIgZmlsbD0iI0Q5RDlEOSIgZmlsbC1vcGFjaXR5PSIwLjkiLz4KPHJlY3QgeD0iNDEuMDc4NSIgeT0iNDEuMDc5MSIgd2lkdGg9IjQxLjA3ODUiIGhlaWdodD0iNDEuMDc4NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDQxLjA3ODUgNDEuMDc5MSkiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxyZWN0IHk9IjQxLjA3OTEiIHdpZHRoPSI0MS4wNzg1IiBoZWlnaHQ9IjQxLjA3ODUiIHRyYW5zZm9ybT0icm90YXRlKC05MCAwIDQxLjA3OTEpIiBmaWxsPSIjRDlEOUQ5IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cmVjdCB4PSIxMjAuOTIyIiB5PSIxNjQuMzE0IiB3aWR0aD0iNDEuMDc4NSIgaGVpZ2h0PSI0MS4wNzg1IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMTIwLjkyMiAxNjQuMzE0KSIgZmlsbD0iI0Q5RDlEOSIgZmlsbC1vcGFjaXR5PSIwLjkiLz4KPC9nPgo8L3N2Zz4K);
          display: block;
          bottom: -10px;
          right: 0;
          position: absolute;
          z-index: 0;
        }
      `}</style>
    </div>
  );
}
