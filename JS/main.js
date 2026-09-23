const cargarCategorias = () => {
	const listaCategorias = document.getElementById("lista-categorias");

	categorias.forEach((categoria) => {
		listaCategorias.innerHTML += `
			<li><a href="#">${categoria}</a></li>
		`;
	});
};

const cargarProductos = () => {
	const contenedorProductos = document.getElementById("contenedor-productos");

	productos.forEach((producto) => {
		contenedorProductos.innerHTML += `
			<article>
				<img src="${producto.imagen}" alt="${producto.nombre}" width="400">
				<h3>${producto.nombre}</h3>
				<p>${producto.descripcion}</p>
				<p>Precio: <strong>$${producto.precio.toLocaleString("es-AR")}</strong></p>
				<button type="button" data-producto-id="${producto.id}">Agregar</button>
			</article>
		`;
	});

	contenedorProductos.querySelectorAll("[data-producto-id]").forEach((boton) => {
		boton.addEventListener("click", () => {
			const producto = productos.find(
				(item) => item.id === Number(boton.dataset.productoId)
			);
			alert(`Agregaste ${producto.nombre} al carrito.`);
		});
	});
};

cargarCategorias();
cargarProductos();
