import React, { useState } from 'react'

export const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading,setLoading] = useState(false);
  const [qrdata,setQrData] = useState("https://www.cricbuzz.com/");
  const [qrsize,setQrSize] = useState("150");
  async function generateQR() {
    setLoading(true);
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}*${qrsize}&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    }
    catch (error){
      console.log("Error Generating QR Code",error);
    }
    finally{
      setLoading(false)
    }
  }
  function downloadQR(name) {
    fetch(img)
    .then(response=>response.blob()).then((blob)=>{
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob);
      console.log(link)
      link.download = "qrcode.png"
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error)=>{
      console.log("Error downloading QR Code",error)
    })
  }
  return (
    <div className='app-container'>
      <h1>QR Code Generator</h1>
      {loading && <p>Please Wait...</p>}
        {img && <img src={img} className='qr-code-image'/>}
        <div>
            <label htmlFor='dataInput' className='input-label'>Data for QR Code:</label>
            <input type='text' id='dataInput' value={qrdata} placeholder='Enter data for QR Code' onChange={(e)=>setQrData(e.target.value)}/>
            <label htmlFor='sizeInput' className='input-label'>Image Size (e.g., 150):</label>
            <input type='text' id='sizeInput' value={qrsize} placeholder='Enter Image Size' onChange={(e)=>setQrSize(e.target.value)}/>
            <button className='generate-button' disabled={loading} onClick={()=>generateQR()}>Generate QR Code</button>
            <button className='download-button' onClick={downloadQR}>Download QR Code</button>
        </div>
        <p className='footer'>Designed By Jana</p>
    </div>
  )
};
