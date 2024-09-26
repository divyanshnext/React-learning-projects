import React from 'react'

function Card({userName,spanText}){
  // console.log("props",props);
  // console.log(props.userName)
    return(
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19397812/1048232144.jpg.jpg?quality=90&strip=all&crop=0%2C0.0044935741889063%2C100%2C99.991012851622&w=828" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{userName}</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{spanText}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{spanText}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{spanText}</span>
  </div>
</div>

        </>
    )
}

export default Card