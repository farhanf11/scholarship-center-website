import { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import BeasiswaCard from '../../components/BeasiswaCard/BeasiswaCard';

//nyambung ke component beasiswa card
class FormDonatur extends Component{
    state={
        post:[],
        // 1.1
        cardPost: {
            id: 1,
            title:'',
            desc:'',
            nominal:'',
            syarat:'',
            alamat:'',
            userId: 1
        },
    }

    handleFormChange = (event) => {
        let cardPostNew= {...this.state.cardPost} //... untuk mengambil data yg sama dari this yg dipaggil
        let timestamp = new Date().getTime();

        if(!this.state.isUpdate){
            cardPostNew['id'] = timestamp;
        }
        cardPostNew[event.target.name] = event.target.value;

        this.setState({
            cardPost: cardPostNew
        })
    }

    getPostAPI=()=>{
        axios.get('http://localhost:3004/posts')
        .then((result)=>{ 
            this.setState({
                post: result.data
            })
        })
    }

    postDataToAPI = () => {
        axios.post(`http://localhost:3004/posts`, this.state.cardPost).then((res)=>{
            console.log(res);
            this.getPostAPI();
        }, (err) => {
            console.log('error: ', err);
        })
    }

    handleSubmit = () =>{
        if(this.state.isUpdate){
            this.putDataToAPI();
        } else{
            this.postDataToAPI();
            alert('berhasil menambah postingan, refresh halamanmu')
        }
    }

    render(){
        return(
            <div className='bg-indigo-100 h-fill w-full'>
                <Navbar/>
                <div className="flex justify-center gap-3 mb-5 mt-5">
                    <p className='font-semibold text-2xl'>Daftarkan Beasiswamu Disini</p>
                </div>
    
                <div className="mb-10">  
                    <div className='mx-10 mb-5'>
                        <p className='mb-3'>Nama Beasiswa</p>
                        <input type="text" name='title' placeholder='Beasiswa ABCD' className='px-3 border rounded-sm border-gray-400 w-full' onChange={this.handleFormChange}/>
                    </div>
                    <div className="mx-10 mb-5">
                        <p>Deskripsi Beasiswa</p>
                        <textarea type="text" name='body' placeholder='deskripsi' className='px-3 border rounded-sm border-gray-400 w-full' onChange={this.handleFormChange}/>
                    </div>
                    <div className="mx-10 mb-5">
                        <p>Nominal Beasiswa</p>
                        <input type="number" name='nominal' placeholder='nominal' className='px-3 border rounded-sm border-gray-400 w-full' onChange={this.handleFormChange}/>
                    </div>
                    <div className='mx-10 mb-5'>
                        <p>Persyaratan</p>
                        <input type="text" name='syarat' placeholder='maksimal semester' className='px-3 border rounded-sm border-gray-400 w-full' onChange={this.handleFormChange}/>
                    </div>    
                    <div className="mx-10 mb-5">
                        <p>Alamat Perusahaan</p>
                        <input type="text" name='alamat' placeholder='Alamat Lengkap' className='px-3 border rounded-sm border-gray-400 w-full' onChange={this.handleFormChange}/>
                    </div>
                    <div className="flex justify-center">
                        <button className='bg-blue-500 text-white font-medium rounded-md py-2 px-12' onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
                <Footer/>

                {
                    this.state.post.map(post => {
                        return <BeasiswaCard key={post.id} data={post}/>
                    })
                    //data=post disini mengacu ke file Post untuk memanggil nya
                    //post.title dan body untuk pemanggilan dari json
                    //post.id untuk eror saat pemanggilan
                }
            </div>
        )
    }
}

export default FormDonatur;