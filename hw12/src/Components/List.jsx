import Video from "./Video";
import Article from "./Article";
import Highlight from "./Highlight";

function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case "video": {
        const HighlightVideo = Highlight(Video);
        return <HighlightVideo {...item} />;
      }

      case "article": {
        const HighlightArticle = Highlight(Article);
        return <HighlightArticle {...item} />;
      }
    }
  });
}

export default List;
