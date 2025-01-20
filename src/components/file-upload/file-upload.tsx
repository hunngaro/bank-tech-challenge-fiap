import Image from "next/image";
import { HTMLAttributes } from "react";
import close from "@/assets/close-black.svg";
import fileImage from "@/assets/file.svg";

type Props = HTMLAttributes<HTMLDivElement> & {
  files: File[];
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: (image: File) => void;
};

export function FileUpload({
  files,
  onFileChange,
  onRemoveFile,
  ...rest
}: Props) {
  return (
    <div
      className={`flex flex-col max-w-64 bg-white items-center justify-center border-2 border-dashed border-black rounded-lg p-6 ${rest.className}`}
    >
      <div className="flex flex-col items-center">
        <div className="text-my-dark-green text-4xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#004D61"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z"></path>
          </svg>
        </div>
        <label
          htmlFor="image-upload"
          className="text-my-dark-green font-medium cursor-pointer hover:underline"
        >
          Escolher documentos
        </label>
        <p className="text-gray-500 text-sm text-center mt-1">(Opcional)</p>
        <p className="text-gray-500 text-sm text-center mt-1">
          Selecione recibos ou documentos relacionado a transação.
        </p>
        <input
          id="image-upload"
          type="file"
          accept="image/*, application/pdf"
          onChange={onFileChange}
          multiple
          className="hidden"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 w-full">
        {files.map((file, index) => (
          <div key={index} className="relative">
            <button
              type="button"
              className="absolute bg-white p-1 rounded-full -right-1 -top-1"
              onClick={() => onRemoveFile(file)}
            >
              <Image src={close} className="w-2 h-2" alt="" />
            </button>
            <Image
              src={
                file.type.startsWith("image")
                  ? URL.createObjectURL(file)
                  : fileImage
              }
              alt={`Preview ${index}`}
              className="h-10 object-cover rounded-lg shadow-md"
              width={100}
              height={100}
            />
            <p className="mt-2 text-sm text-center text-gray-600 truncate">
              {file.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
