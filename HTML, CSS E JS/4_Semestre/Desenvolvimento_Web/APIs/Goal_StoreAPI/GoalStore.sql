create database GoalStore;

use goalstore;

CREATE TABLE camisa (
    id_camisa INT AUTO_INCREMENT PRIMARY KEY,
    nome_camisa VARCHAR(255),
    descricao text,
    imagem VARCHAR(255),
    preco DECIMAL(10, 2),
    categoria VARCHAR(255)
);


INSERT INTO camisa (nome_camisa, descricao, imagem, preco, 
        categoria)
                    VALUES ("Flamengo", "preta", "132", 112, "camiseta");

SELECT * FROM camisa;                    
                    
                    
SELECT * FROM camisa WHERE descricao IS NULL;
alter table camisa
MODIFY descricao text;