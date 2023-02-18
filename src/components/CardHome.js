import React from 'react'

const CardHome = (props) => {
    return (
        <>
            <style>
                {`
                .card{
                    border-radius: 25px;
                    background-color: #FFF;
                    width:200px;

                    
                  }
                  .image-content,
                  .card-content{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 25px 14px;
                  }
                  .image-content{
                    position: relative;
                    row-gap: 5px;
                    padding: 25px 0;
                  }
                  .overlay{
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    background-color: #4070F4;
                    border-radius: 25px 25px 0 25px;
                  }
                  .overlay::before,
                  .overlay::after{
                    content: '';
                    position: absolute;
                    right: 0;
                    bottom: -40px;
                    height: 40px;
                    width: 40px;
                    background-color: #4070F4;
                  }
                  .overlay::after{
                    border-radius: 0 25px 0 0;
                    background-color: #FFF;
                  }
                  .card-image{
                    position: relative;
                    height: 150px;
                    width: 150px;
                    border-radius: 50%;
                    background: #FFF;
                    padding: 3px;
                  }
                  .card-image .card-img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                    border: 4px solid #4070F4;
                  }
                  .name{
                    font-size: 16px;
                    font-weight: 500;
                    color: #333;
                  }
                  .description{
                    font-size: 14px;
                    color: #707070;
                    text-align: center;
                  }
                  .button{
                    border: none;
                    font-size: 16px;
                    color: #FFF;
                    padding: 8px 16px;
                    background-color: #4070F4;
                    border-radius: 6px;
                    margin: 14px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                  }
                  .button:hover{
                    background: #265DF2;
                  }
                  
                  .swiper-navBtn{
                    color: #6E93f7;
                    transition: color 0.3s ease;
                  }
                  .swiper-navBtn:hover{
                    color: #4070F4;
                  }
                  .swiper-navBtn::before,
                  .swiper-navBtn::after{
                    font-size: 35px;
                  }
                  .swiper-button-next{
                    right: 0;
                  }
                  .swiper-button-prev{
                    left: 0;
                  }
                  .swiper-pagination-bullet{
                    background-color: #6E93f7;
                    opacity: 1;
                  }
                  .swiper-pagination-bullet-active{
                    background-color: #4070F4;
                  }
                  
                  @media screen and (max-width: 768px) {
                    .slide-content{
                      margin: 0 10px;
                    }
                    .swiper-navBtn{
                      display: none;
                    }
                  }
                   
            `}
            </style>
            <div className="card swiper-slide  ">
                <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                        <img src={props.photo} alt="" className="card-img rounded-full h-[120px]" />
                    </div>
                </div>

                <div className="card-content flex flex-col mt-2">
                    <h2 className="name">{props.name}</h2>
                    <p className="description mt-2 font-semibold">{props.designation.toUpperCase()}</p>

                    
                </div>
            </div>
        </>
    )
}

export default CardHome