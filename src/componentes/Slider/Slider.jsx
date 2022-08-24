const Slider = ({data}) => {
	let primerElemento = true;
	return(
		<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">			
			{
				data.images.map(image => {
					if(primerElemento){
						primerElemento = false;
						return(
							<div className="carousel-item active">
								<img src={image} alt="..." className="d-block w-100"/>
							</div>
						);
					} else {
						return(
							<div className="carousel-item">
								<img src={image} alt="..." className="d-block w-100"/>
							</div>
						);
					}
				})
			}
			</div>
		</div>
	);
};

export default Slider;