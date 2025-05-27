import helloGif from './assets/hello.gif';
import bossam from './assets/bossam.jpeg';
import './greeting.css';

function HelloGif() {
    return <img src={helloGif} className="hello-gif" alt="" />
}

function TestHeading() {
    return <h1>
        This is a heading created using JSX!
    </h1>;
}

function FavoriteFood() {
    return <div className='favorite-food-div'>
        <h2>Now let me tell you about my favorite food right now...</h2>
        <p className='food-para'>It's Bossam from South Korea!</p>
        <p className='food-para'>
            Bossam is a dish made with boiled pork belly (with spices!) and served with sides 
            such as napa cabbage, kimchi, or more!
        </p>
        <img src={bossam} className='food-image' alt='Plated bossam consisting of sliced pork, fresh lettuce, and kimchi' />
    </div>
}

export { HelloGif, TestHeading, FavoriteFood };
