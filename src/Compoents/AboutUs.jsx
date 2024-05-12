import { useState } from "react"


function AboutUs() {
    let [myStyle, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

let [btnText, setBtnText]=useState('Enable Dark mode')


    const clickMode = () => {
        if(myStyle.color==='black'){
            setStyle({
                color: 'white',
        backgroundColor: 'black'

            })
            setBtnText('Enble dark mode')
        }
        else{
            setStyle({
                color: 'black',
        backgroundColor: 'white'
            })
            setBtnText('Enble light mode')
        }

    }
    
    return <div>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1

                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <button onClick={clickMode} className="btn btn-primary my-4">{btnText}</button>
    </div>
}
export default AboutUs