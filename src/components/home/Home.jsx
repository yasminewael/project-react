import resume from "../../assets/Yasmine wael.pdf";
import image from "../../assets/QITH2114.JPG"
import './Home.css'

const Home = () => {
return(
<>
<h1 className="mt-5 mx-5">Home</h1>
<div className="container mt-5 d-flex ">
<div className="w-75 my-5 text-center">
<h2 className="name">Yasmine Wael Ahmed</h2>
<p>I'm a Junior FrontEnd Developer Graduated from Business Information System (BIS) Helwan University 
        {/* <span className="text-primary fw-bolder">GPA:</span> */}

</p>
<div className="contact mt-3">
<a className="mx-3 text-primary fw-bolder text-decoration-none text-center" href="https://www.linkedin.com/in/yasmine-wael-548a72166/">Linkedin</a>
 ,<a className="mx-3 text-warning fw-bolder text-decoration-none" href="https://github.com/yasminewael">GitHub</a>
</div>
<div className="mt-3">
     <p><span className="text-primary fw-bolder skills">My Skills:
    </span> HTML5, CSS3, JavaScript, Bootstrap, Saas, Es6, React, TypeScript, Git, GitHub</p>
    <a href={resume} className="btn btn-warning w-25" download>Resume</a>
</div>
</div>
    <figure className="img my-3">
        <img className="w-100" src={image}/>
    </figure>
</div>
</>
    );
}
export default Home;
