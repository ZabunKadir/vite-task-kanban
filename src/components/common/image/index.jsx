const CustomImg=({
    src,
    alt="Image",
    width="w-full",
    height="h-full",
    loading="lazy",
    fetchPriority="auto",
    crossOrigin,
    decoding="auto",
    referrerPolicy,
    sizes,
    srcSet,
    useMap,
    ...props
})=>{
    return(
         <img 
         src={src} 
         alt={alt}
         className={`${width} ${height}`}
         loading={loading}
         fetchPriority={fetchPriority}
         crossOrigin={crossOrigin}
         decoding={decoding}
         referrerPolicy={referrerPolicy}
         sizes={sizes}
         srcSet={srcSet}
         useMap={useMap}
         {...props}
         />
    )
}

export default CustomImg;