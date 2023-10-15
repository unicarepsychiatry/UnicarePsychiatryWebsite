import React from 'react'

export const WhyChooseusCard = ({title,subtitle,pic}) => {
  return (
    <div className="md-4-cards col-sm-12 col-md-4 mx-1 my-2">
        <div className="d-flex justify-content-around">
            <div className="d-md-block d-none">
                <img className="card-img-style img-fluid" src={pic}/>
            </div>
            <div className="col-md-8">
                <h4 className="primary-color">{title}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    </div>
  )
}
