import React from 'react'
import axios from 'axios';
import { Conteiner, Icon, Label, A } from "./styles"
import Button from '../../components/button/Button'
import Title from '../../components/title/index'
import Camera from './assets/Camera.png'
import user from './assets/user.png'
import Input from '../../components/input/input'




class Uploader extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedFile: '',
        }

        this.handleChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
        })
    }

    submit() {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:8000/upload.php";

        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.warn(res);
            })

    }

    render() {
        return (
            <div>
                <Conteiner>
                    <Icon src={user} />
                    <Title title="Faça o reconhecimento facial" />
                    <img src={Camera} />

                    <Input tipo="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                    <div className="col-md-6 offset-md-3">
                        <div >
                        <A href="/login-estufas"> <Button button="Salvar" type="submit" className="btn btn-dark" onClick={() => this.submit()}></Button></A>
                        </div>
                    </div>


                </Conteiner>
            </div>
        )
    }
}

export default Uploader;