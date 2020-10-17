import React from 'react';

const TagEditor = props => {
    const { data } = props;
    const { name , description, urlSlug } = data;
    const { handleName, handleDescription, handleUrlSlug, save } = props;
    
    return(
        <form onSubmit={ save }>
            <div className="form-group mb">
                <label htmlFor="name">Nombre:</label>
                <input id="name" type="text" value={ name } onChange={ event => handleName(event) }/>
            </div>
            <div className="form-group mb">
                <label htmlFor="description">Descripcion:</label>
                <input id="description" type="text" value={ description } onChange={ event => handleDescription(event) }/>
            </div>
            <div className="form-group mb">
                <label htmlFor="urlSlug">Url Slug:</label>
                <input id="urlSlug" type="text" value={ urlSlug } onChange={ event => handleUrlSlug(event) }/>
            </div>
            <div className="mb m1">
            <input type="submit" className="btn" value="Guardar"/>
            </div>
        </form>
    );
}

export default TagEditor;