import { CustomNavbarExample } from "../components/navBarExaple"
import "./about.css"
export const AboutPage = () => {

    return (
        <>
        <CustomNavbarExample/> 
        <div className="about-main">
            <div className="about-Container">
                <h1>
                    About Us
                </h1>
                <div className="para-container">
                <p className="para">
                    Welcome to our online store, your one-stop destination for the latest trends in clothing and footwear. We are passionate about fashion and strive to offer you a curated collection that combines style, quality, and affordability.
                </p>

                <p className="para">
                    Our collection of clothes features a wide range of options, from casual everyday wear to elegant evening attire. Whether you're looking for the perfect outfit for a night out or updating your wardrobe basics, we have something for every occasion. Our clothes are crafted from high-quality fabrics and designed to fit and flatter all body types.
                </p>

                <p className="para">
                    In addition to our clothing range, we also offer a diverse selection of shoes to complete your look. From sneakers and sandals to heels and boots, our shoe collection caters to every style and preference. Whether you're dressing up for a special occasion or keeping it casual, our shoes are designed for both comfort and style.
                </p>
                <p className="para">
                    At our store, we believe that fashion should be accessible to everyone. That's why we offer competitive prices without compromising on quality. We also strive to provide exceptional customer service, ensuring that your shopping experience is smooth and enjoyable.
                </p>

                <p className="para">
                    Thank you for choosing our store. We hope you find something you love and look forward to helping you create your perfect wardrobe!
                </p>
                </div>
            </div>
            </div>
        </>
    )
}