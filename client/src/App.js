import './App.css';
import {useState, useEffect} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

function App(props) {

  const [gender, setGender] = useState("Male");
  const [nat, setNat] = useState("Austraila (AU)");
  const [noOfResults, setNoOfResults] = useState(10);


  function handleSubmit (){
    console.log("submission button pressed")
    var genderr = "male"
    if (gender === "Female") {genderr = "female"}
    var nationality = "AU"
    if (nat === "Brazil (BR)") {nationality="BR"}
    if (nat === "Canada (CA)") {nationality="CA"}
    if (nat === "France (FR)") {nationality="FR"}
    if (nat === "Great Britain (GB)") {nationality="GB"}
    if (nat === "USA (US)") {nationality="US"}
    var url = "https://randomuser.me/api?page=1&results="+noOfResults+"&gender="+genderr+"&nat="+nationality;
    axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response.data);
      setPosts(response.data.results)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  

  function Header(){
    return(
      <div className="header"> 
        <div className="options">
          <div className="gender">
          <label for="Gender">Gender : </label>
          <select onChange={(e)=>{setGender(e.target.value)}}>
            <option value="Male" selected>Male</option>
            <option value="Female">Female</option>
          </select>
          </div>

          <div className="nationality">
          <label for="Nationality">Nationality : </label>
          <select onChange={(e)=>{setNat(e.target.value)}}>
            <option value="Australia" selected>Australia (AU)</option>
            <option value="Brazil">Brazil (BR)</option>
            <option value="Canada">Canada (CA)</option>
            <option value="France">France (FR)</option>
            <option value="Great Britain">Great Britain (GB)</option>
            <option value="USA">USA (US)</option>
          </select>
          </div>

          <div className="noOfResults">
          <label for="Number of Results in a page">Results per page : </label>
          <select onChange={(e)=>{setNoOfResults(e.target.value)}}>
            <option value="10" selected>10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>  
          </select>
          </div>

          </div>
          <div className="Filter">
            <input type="submit" id="filterButton" value="Filter" onClick={handleSubmit}/>
          </div>  
      </div>  
    )
  } 

  const [posts, setPosts]= useState([{"gender": "male","name": {"title": "Mr","first": "Mostafa","last": "Albrigtsen"},"location": {"street": {"number": 5481,"name": "Bålveien"},"city": "Kjosen","state": "Akershus","country": "Norway","postcode": "9504","coordinates": {"latitude": "48.4257","longitude": "59.6173"},"timezone": {"offset": "+7:00","description": "Bangkok, Hanoi, Jakarta"}},"email": "mostafa.albrigtsen@example.com","login": {"uuid": "0d816065-5a71-41ec-a92f-bc91a27ce9e8","username": "organiccat954","password": "bristol","salt": "xvOCgg4X","md5": "5e6072192fee8237d5f49c6cd2d0d8c5","sha1": "e7303f9cd2150f7efd08ee9c8fc2f215f54a4027","sha256": "e2f222aca3c5d9198710b013c7602a287ae1d114c958d5ad5f9a05757bac93b8"},"dob": {"date": "1983-06-13T18:19:47.130Z","age": 38},"registered": {"date": "2016-04-16T06:01:37.367Z","age": 5},"phone": "26148858","cell": "92514656","id": {"name": "FN","value": "13068305599"},"picture": {"large": "https://randomuser.me/api/portraits/men/59.jpg","medium": "https://randomuser.me/api/portraits/med/men/59.jpg","thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"},"nat": "NO"},{"gender": "male","name": {"title": "Mr","first": "Joshua","last": "George"},"location": {"street": {"number": 4048,"name": "Mockingbird Ln"},"city": "Naperville","state": "Kentucky","country": "United States","postcode": 16498,"coordinates": {"latitude": "-53.7071","longitude": "28.0515"},"timezone": {"offset": "+4:00","description": "Abu Dhabi, Muscat, Baku, Tbilisi"}},"email": "joshua.george@example.com","login": {"uuid": "36a9aeff-8496-4895-9a9b-d1a9e6d70687","username": "ticklishladybug149","password": "gator1","salt": "PJRYfPK6","md5": "a23106c5c76897212c1e90e87f1a25e7","sha1": "2e909e1df1291ab1e0d5ae84e50b7a3fa7394efd","sha256": "738f1c4027e48853fe8fe534ee9c13297a7333f961b5b54b220972b5ae01d766"},"dob": {"date": "1967-04-12T11:01:59.618Z","age": 54},"registered": {"date": "2011-01-31T06:01:54.670Z","age": 10},"phone": "(995)-021-5090","cell": "(161)-583-6163","id": {"name": "SSN","value": "045-72-4773"},"picture": {"large": "https://randomuser.me/api/portraits/men/49.jpg","medium": "https://randomuser.me/api/portraits/med/men/49.jpg","thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"},"nat": "US"},{"gender": "male","name": {"title": "Mr","first": "Arthur","last": "Wright"},"location": {"street": {"number": 6814,"name": "North Road"},"city": "Masterton","state": "Tasman","country": "New Zealand","postcode": 23093,"coordinates": {"latitude": "89.7387","longitude": "159.1173"},"timezone": {"offset": "+5:00","description": "Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email": "arthur.wright@example.com","login": {"uuid": "814190f1-2a29-4e5a-a960-79c36cb6d1fb","username": "happyelephant523","password": "luckyone","salt": "bhQ0CmAu","md5": "722acedc7c6a23de68eac6a73964b7f8","sha1": "55de6fd86ad7fa2a4771835f77373deca2b3c739","sha256": "43bd9dd6d3fe75d1444fd850270e94d290612d986ad6282e3a4db210e60c76c8"},"dob": {"date": "1947-12-21T10:26:51.898Z","age": 74},"registered": {"date": "2004-02-21T01:22:44.482Z","age": 17},"phone": "(017)-996-0200","cell": "(925)-885-4914","id": {"name": "","value": null},"picture": {"large": "https://randomuser.me/api/portraits/men/31.jpg","medium": "https://randomuser.me/api/portraits/med/men/31.jpg","thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"},"nat": "NZ"},{"gender": "male","name": {"title": "Mr","first": "Lorenzo","last": "Perrin"},"location": {"street": {"number": 4836,"name": "Rue Barrier"},"city": "Nîmes","state": "Alpes-Maritimes","country": "France","postcode": 12803,"coordinates": {"latitude": "32.6599","longitude": "33.6286"},"timezone": {"offset": "+4:30","description": "Kabul"}},"email": "lorenzo.perrin@example.com","login": {"uuid": "6c201bf7-3658-4637-8151-2cefa0411f48","username": "greenleopard834","password": "1011","salt": "2I5Hyk9z","md5": "640ee84e42c546f0183c211709393ff0","sha1": "ff22d13c483f1597a753faa2ea36a288f57b852b","sha256": "3730efb8133c98226c4c065809c199acaca23f22d85926ea966ad302941f70e9"},"dob": {"date": "1994-02-19T23:10:44.307Z","age": 27},"registered": {"date": "2013-07-11T08:50:41.879Z","age": 8},"phone": "01-79-91-53-72","cell": "06-64-47-74-58","id": {"name": "INSEE","value": "1NNaN30620962 90"},"picture": {"large": "https://randomuser.me/api/portraits/men/82.jpg","medium": "https://randomuser.me/api/portraits/med/men/82.jpg","thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"},"nat": "FR"},{"gender": "male","name": {"title": "Mr","first": "Andrew","last": "Fowler"},"location": {"street": {"number": 4194,"name": "The Drive"},"city": "Athenry","state": "Louth","country": "Ireland","postcode": 44225,"coordinates": {"latitude": "62.8999","longitude": "140.3156"},"timezone": {"offset": "-11:00","description": "Midway Island, Samoa"}},"email": "andrew.fowler@example.com","login": {"uuid": "86f1777c-a769-400d-8e86-2f6068dead1c","username": "smallcat149","password": "police","salt": "KEsrgYsK","md5": "1c65f3902139a7b5c646452b67387626","sha1": "182a30eea8ff9d240d4d4a312b8a9e3a735e78bb","sha256": "d1d2c38ae551a05287034b6a1165f7eba967a6b4a5146e33ed7a457a4039694b"},"dob": {"date": "1966-04-17T12:36:27.249Z","age": 55},"registered": {"date": "2005-05-19T17:52:46.801Z","age": 16},"phone": "041-289-6949","cell": "081-875-0004","id": {"name": "PPS","value": "9746564T"},"picture": {"large": "https://randomuser.me/api/portraits/men/53.jpg","medium": "https://randomuser.me/api/portraits/med/men/53.jpg","thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"},"nat": "IE"}])
  

  const [clicked, setClicked] = useState(false);

  function Larged (post){
    return(
      <img src={post.picture.large} alt="" onClick={()=> setClicked(false)}/>
    )
  }

  function Thumbnailed(post){
    return(
      <img src={post.picture.thumbnail} alt="" onClick={()=> setClicked(true)}/>
    )
  }

  function Card(){
    return (
      <div className="App">
        <center>
          <Header/>
          {posts.map(post =>{
            return <div className="post">
                      <div className="image">
                        {/* image */}
                        {/* <img src={post.picture.thumbnail} alt="" onClick={()=> setClicked(true)}/> */}
                        <img id="inactive_image" src={post.picture.large} alt="" onClick={()=> setClicked(false)}/>
                        {/* { clicked ? <Larged/> : <Thumbnailed/> } */}
                        {/* <a href={post.picture.thumbnail}><img id="imageToBeClickedOn" alt=""/></a>
                        <img id="ImgToDisplay" alt=""></img>   */}

                      </div>
                      <div className="details">
                        <h6 className="name">Name: {post.name.title} {post.name.first} {post.name.last}</h6>
                        <h6 className="gender">Gender: {post.gender}</h6>
                        <h6 className="nationality">Nationality: {post.nat}</h6>
                        <h6 className="email">Email: {post.email}</h6>
                        <h6 className="phone">Phone: {post.phone}</h6>
                      </div>
                  </div>  
          })}
        </center>
      </div>
    );
  }

  return (
    <div>
        <Router>
          <Route exact path="/" component={Card} />
        </Router>
    </div>
  )
}

export default App;  
