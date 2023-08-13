import React, { useState } from 'react'
import ImageShow from './ImageShow'
export default function ImageList({images}) {

    console.log('imageList',images)
  return (
    <div>
        <ul>
            { images.map( image =>(
             <ImageShow key={image.id}value={image.urls.small}/>
            ))}
        </ul>
        
        </div>
  )
}
