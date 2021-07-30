import * as React from 'react';

interface CardPropType {
  title: string;
  description: string;
  renderComp: React.FC<any>
}

const Card: React.FC<CardPropType> = ({title, description, ...rest }) => {
  const RenderComponent: React.FC = rest.renderComp;
  return(
    <div className='card-container'>
      <div className="card animation-container">
        <div className="card-content">
          <div className="card-title">
            {title}
          </div>
          <div className="card-description">
            {description}
          </div>
        </div>
        <div className="card-image">
          <RenderComponent />
        </div>
      </div>
    </div>
  )
}

export default Card;
