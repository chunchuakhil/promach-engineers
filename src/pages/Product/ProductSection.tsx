import './ProductSection.css';

const ProductSection = () => {
  return (
    <section className='section-products'>
      <div className='container'>
        <span className='subheading'>What we do</span>
        <h2 className='heading-secondary'>Our products</h2>
      </div>
      <div className='container container-grid'>
        <div className='products'>
          <a href='#' className='img-link'>
            <img src='https://www.promach.in/assets/images/about3.jpg' alt='product images' className='product-img' />
          </a>
          <a href='#' className='link-page'>
            <h3 className='heading-tertiary'>Vertical Shaft Impactor</h3>
          </a>
          <p className='product-info'>
            Vertical Shaft Impactor (VSI) crushers are designed to be used in tertiary or quaternary stage crushing.
          </p>
        </div>
        <div className='products'>
          <a href='#' className='img-link'>
            <img src='https://www.promach.in/assets/images/about3.jpg' alt='product images' className='product-img' />
          </a>
          <a href='#' className='link-page'>
            <h3 className='heading-tertiary'>Vibrating Screens</h3>
          </a>
          <p className='product-info'>
            Vibrating Screens are the most important screening machines primarily utilised in the mineral processing industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
