import "./banner-publicitario.css";

const BannerPublicitario = ({bannerImage, heightBanner}) => {
	return(
		<div className="container-fluid d-flex justify-content-center mb-5">
			<div className="container-fluid p-0 d-flex justify-content-center align-items-center ms-2 me-2 banner-image-container" style={{height: heightBanner}}>
				<img src={bannerImage} alt="..." className="banner__image"/>
			</div>
		</div>
	);
}

export default BannerPublicitario;