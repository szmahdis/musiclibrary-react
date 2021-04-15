import PlayButton from '../components/PlayButton';
import PauseButton from '../components/PauseButton';
import LikeButton from '../components/LikeButton';
import ForwardButton from '../components/ForwardButton';
import BackwardButton from '../components/BackwardButton';


function ActionBar() {

    return <div>

        <LikeButton></LikeButton>
        <BackwardButton></BackwardButton>
        <PlayButton></PlayButton>
        <PauseButton></PauseButton>
        <ForwardButton></ForwardButton>
        
    </div>
}

export default ActionBar;