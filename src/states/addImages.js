import { Component } from "react";

class AddImage extends Component {
    state = {
        images: ["https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg", "https://cdn.pixabay.com/photo/2021/11/12/14/33/captain-america-6789190_640.jpg", "https://cdn.pixabay.com/photo/2023/06/28/20/04/ai-generated-8095123_640.png"]
    }

    add = () => {
        this.setState({
            images: [...this.state.images, "https://cdn.pixabay.com/photo/2024/03/23/10/24/thor-8651168_640.jpg"]
        })
    }

    delete = () => {
        const images = [...this.state.images];
        images.pop();
        this.setState({ images });
    }

    reset = () => {
        this.setState({
            images: ["https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg", "https://cdn.pixabay.com/photo/2021/11/12/14/33/captain-america-6789190_640.jpg", "https://cdn.pixabay.com/photo/2023/06/28/20/04/ai-generated-8095123_640.png"]
        })
    }

    render() {
        return (
            <>
                <div className="btns">
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.delete}>Delete</button>
                    <button onClick={this.reset}>Reset</button>
                </div>

                <div className="images">
                    {
                        this.state.images.map((val) => {
                            return (
                                <img className="imgg" src={val} />
                            )
                        })
                    }

                </div>
            </>
        )
    }
}

export default AddImage;
