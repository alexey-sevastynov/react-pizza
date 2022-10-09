import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#fef1cd"
        foregroundColor="#fff7e0"
        
    >
        <circle cx="136" cy="116" r="105" />
        <rect x="23" y="261" rx="10" ry="10" width="231" height="35" />
        <rect x="-3" y="321" rx="10" ry="10" width="280" height="75" />
        <rect x="0" y="420" rx="10" ry="10" width="133" height="40" />
        <rect x="146" y="420" rx="20" ry="20" width="133" height="40" />
    </ContentLoader>
)

export default Skeleton
