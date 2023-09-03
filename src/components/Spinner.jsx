import spinner from "../assets/svg/spinner.svg"

export default function Spinner() {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-o top-0 z-50 h-full">
        <div>
            <img className="h-40" src={spinner} alt="Loading..." />
        </div>
    </div>
  )
}
