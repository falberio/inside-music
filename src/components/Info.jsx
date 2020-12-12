import React from 'react';
import PropTypes from 'prop-types';

const Info = ({info}) => {

    if(Object.keys(info).length === 0) return null;

    const {
            strArtistThumb: imagen,
            strGenre: genero,
            strBiographyES: biografia,
            strFacebook: facebook,
            strTwitter: twitter,
            strLastFMChart: lastFM
        } = info;

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información artista
            </div>
            <div className="card-body">
                <img src={imagen} alt="Logo Artista"/>
                <p className="card-text font-weight-bold text-primary">{genero}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{biografia}</p>
                <p className="card-text">
                    <a href={`https://${facebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${twitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${lastFM}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}

Info.propTypes = {
    info: PropTypes.object.isRequired
}
 
export default Info;