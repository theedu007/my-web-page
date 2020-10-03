import React from 'react';

const PostEditor = (props) => {
    const { post } = props.state;
    const { categories, tags} = props.state;
    const { 
        handleTitle, 
        handleShortDescription, 
        handleUrlSlug,
        handlePostContent,
        handleCategories,
        handleTags,
        handleCheckbox,
        savePost
    } = props;

    return(
        <form onSubmit={ savePost }>
            <div className="form-group mb">
                <label htmlFor="title">Titulo:</label>
                <input type="text" id="title" value={post.title} onChange={ event => { handleTitle(event) }} />
            </div>
            <div className="form-group mb">
                <label htmlFor="subtitle">Descripcion Corta:</label>
                <input type="text" id="subtitle" value={post.shortDescription} onChange={ event => { handleShortDescription(event) }}/>
            </div>
            <div className="form-group mb">
                <label htmlFor="urlSlug">Url:</label>
                <input type="text" id="urlSlug" value={post.urlSlug} onChange={ event => { handleUrlSlug(event) }} />
            </div>
            <div className="form-group mb">
                <label htmlFor="content">Post Content:</label>
                <textarea id="content" rows="40" value={post.postContent} onChange={ event => { handlePostContent(event) }}></textarea>
            </div>
            <div className="form-group mb">
                <label htmlFor="category">Categorias:</label>
                <select id="category" onChange={ event => { handleCategories(event) }}>
                    <option>Seleccione una opcion</option>
                    { categories ? categories.map((item, index) => <option value={item.id} key={index} >{item.name}</option> ) : null}
                </select>
            </div>
            <div className="form-group mb">
                <label htmlFor="tags">Tags:</label>
                <select id="tags" onChange={ event => { handleTags(event) } }>
                    <option>Seleccione una opcion</option>
                    { tags ? tags.map((item, index) => <option value={item.id} key={index} >{item.name}</option> ) : null}
                </select>
            </div>
            <div className="checkbox-group mb">
                <label htmlFor="posted">Publicado:</label>
                <input type="checkbox" id="posted" value={post.published} onChange={ event => { handleCheckbox(event) }}/>
            </div>
            <div className="form-group mb">
                <input type="submit" className="btn" value="Guardar"/>
            </div>
        </form>
    );
}

export default PostEditor;