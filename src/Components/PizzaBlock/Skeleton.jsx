import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={3}
    width={280}
    height={467}
    viewBox="0 0 280 467"
    backgroundColor="#ebebeb"
    foregroundColor="#b8b8b8"
    {...props}
  >
    <circle cx="119" cy="122" r="115" /> 
    <rect x="14" y="249" rx="10" ry="10" width="216" height="25" /> 
    <rect x="13" y="283" rx="10" ry="10" width="215" height="73" /> 
    <rect x="14" y="366" rx="10" ry="10" width="87" height="41" /> 
    <rect x="115" y="365" rx="20" ry="20" width="113" height="43" />
  </ContentLoader>
)

export default Skeleton