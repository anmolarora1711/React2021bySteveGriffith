import './link.css';

export default function Link(props){

    // const url = props.lnk.url;
    // const title = props.lnk.title;

    console.log(props);
    return <a className="navLink" href={props.lnk.url}>{props.lnk.title}</a>;
}