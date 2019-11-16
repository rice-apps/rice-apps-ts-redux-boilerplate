import React,{ useState, useEffect } from 'react';
import Comment from './Comment';
import VirtualList from 'react-tiny-virtual-list';

const Feedback: React.FC = () => {
    
    
    
    
    
    const [comments, setComments]: Array<any> = useState([]);
    var hasCalledAPI: boolean = false;
    var textarray: Array<string> = ["text block uno", "text block dos", "text block tres"]
    
    //Deleted "async before ()"
    useEffect(() => {
        getComments()
      }, []);
    
    console.log(Promise.resolve(comments))
    async function getComments(): Promise<void>{
        const response: any = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
        //console.log(myJson);
        //console.log("------")
        //console.log(JSON.stringify(myJson));
        const isthisarray = myJson;
        let javascriptArray = []
         
        console.log(isthisarray);
        console.log(typeof isthisarray);
        setComments(myJson)

}
const data: Array<string> = [...Array(100)]
return (
        // <div>
        //     {comments.map((x: string) => <Comment text={x} />)}
        // </div>

    <VirtualList
    width={500}
    height={300}
    itemCount={comments.length}
    itemSize={200} // Also supports variable heights (array or function getter)
    style={{border: '1px solid'}}
    renderItem={({index, style}) =>
    <div key={index} style={style}>
        Comment 1:    {comments[index]}
    </div>
    }
    />
       
    )
}

export default Feedback; 
