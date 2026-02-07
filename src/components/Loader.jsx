import fav from "./assets/images/ptz-icon.png"
export default function Loader() {
  return (
    <div className="relative w-full h-[60vh]">

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
        {/* <div className="w-10 h-10 border-4 border-t-transparent border-[#C5A572] rounded-full animate-spin" /> */}
        <div>

          <img
            src={fav}
            alt="Loading..."
            className="animate-pulse"
            style={{ maxWidth: '80px' }}
          />
          {/*  */}
          <p className="animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  )
}
