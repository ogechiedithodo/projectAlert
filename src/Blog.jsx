import "./Blog.css";
const cardData = [
  { img: "src={./}", title: "y kjvh", content: "o", date: "jhuf" },
  { img: "", title: "jjbj", content: "ppkej", date: "jhuer" },
  { img: "", title: "msdhj", content: "uhydf", date: "opir" },
  { img: "", title: "kjohgu", content: "khduf", date: "ki" },
  { img: "", title: "ll hmrjg", content: "juhfi", date: "jwuhf" },
  { img: "", title: "knuihg.", content: "hgfduy", date: "knuqh" },
  { img: "", title: "lo vuer", content: "jsij", date: "guhfu" },
  { img: "", title: "i jg", content: "kmfewi", date: "mdvn" },
  { img: "", title: "pbhh", content: "mdhfi", date: "kfhu" },
];

const Blog = () => {
  return (
    <>
      <div className="Header"> </div>
      <div className="Blog">
        <div className="BlogText">
          <div className="blog">
            <h1>BLOG</h1>
          </div>
          <div className="news">
            <h1>In the new & E-newslatter </h1>
          </div>
        </div>
        <div className="BlogEmpty"></div>
      </div>
      <div className="CardBody">
        {cardData.map(()=>( 
        <div className="card">
          <div className="imgHolder">
            <img src="" alt="image" />
          </div>
          <div className="title"></div>
          <div className="content"></div>
          <div className="date"></div>
        </div>
        ))}

      </div>
    </>
  );
};
export default Blog;
