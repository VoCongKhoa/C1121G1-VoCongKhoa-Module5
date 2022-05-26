
create table account (
	id bigint not null auto_increment, 
	email varchar(50) not null, 
	encrypt_password LONGTEXT not null, 
	is_enabled bit not null, 
	user_name varchar(50) not null, 
	verification_code varchar(255) not null, 
	primary key (id)
) engine=InnoDB;
create table account_role (
	id bigint not null auto_increment, 
	account_id bigint not null, 
	role_id integer not null, 
	primary key (id)
) engine=InnoDB;
create table customer (
	id bigint not null auto_increment, 
	address varchar(255) not null, 
	customer_name varchar(255) not null, 
	date_of_birth varchar(50) not null, 
	email varchar(50) not null, 
	phone_number varchar(50) not null, 
	primary key (id)
) engine=InnoDB;
create table employee (
	id bigint not null auto_increment, 
	date_of_birth varchar(50), 
	delete_flag bit not null, 
	employee_name varchar(50) not null, 
	id_card varchar(50), image LONGTEXT, 
	phone_number varchar(50), 
	account_id bigint not null, 
	position_id integer not null, 
	primary key (id)
) engine=InnoDB;
create table invoice (
	id bigint not null auto_increment, 
	create_date varchar(50) not null, 
	create_time varchar(50) not null, 
	payments varchar(50) not null, 
	total_money double precision not null, 
	customer_id bigint not null, 
	product_id bigint not null, 
	primary key (id)
) engine=InnoDB;
create table position (
	id integer not null auto_increment, 
	position_name varchar(50) not null,
	primary key (id)
) engine=InnoDB;
create table product (
	id bigint not null auto_increment, 
	camera varchar(50), 
	cpu varchar(50), 
	delete_flag bit not null, 
	image LONGTEXT, 
	memory varchar(50), 
	name varchar(255) not null, 
	other_description LONGTEXT, 
	price double precision not null, 
	qr_scan LONGTEXT, 
	screen_size varchar(50), 
	selfie varchar(50), 
	supplier_id bigint, 
	primary key (id)
) engine=InnoDB;
create table role (
	id integer not null auto_increment, 
	role_name varchar(50) not null, 
	primary key (id)
) engine=InnoDB;
create table storage (
	id bigint not null auto_increment, 
	created_date varchar(50), 
	delete_flag bit not null, 
	quantity bigint not null, 
	status bit not null, 
	employee_id bigint not null, 
	primary key (id)
) engine=InnoDB;
create table storage_product (
	id bigint not null auto_increment, 
	delete_flag bit not null, 
	quantity bigint, 
	product_id bigint, 
	storage_id bigint, 
	primary key (id)
) engine=InnoDB;
create table supplier (
	id bigint not null auto_increment, 
	address varchar(255) not null, 
	delete_flag bit not null, 
	email varchar(50) not null, 
	phone varchar(50) not null, 
	supplier_name varchar(50) not null, 
	primary key (id)
) engine=InnoDB;
alter table account_role add constraint FK1f8y4iy71kb1arff79s71j0dh foreign key (account_id) references account (id);
alter table account_role add constraint FKrs2s3m3039h0xt8d5yhwbuyam foreign key (role_id) references role (id);
alter table employee add constraint FKcfg6ajo8oske94exynxpf7tf9 foreign key (account_id) references account (id);
alter table employee add constraint FKbc8rdko9o9n1ri9bpdyxv3x7i foreign key (position_id) references position (id);
alter table invoice add constraint FK5e32ukwo9uknwhylogvta4po6 foreign key (customer_id) references customer (id);
alter table invoice add constraint FKr006i8cut2ges4x52xnp9g68i foreign key (product_id) references product (id);
alter table product add constraint FK2kxvbr72tmtscjvyp9yqb12by foreign key (supplier_id) references supplier (id);
alter table storage add constraint FKnhe7oggnol41luopqv1t50gk8 foreign key (employee_id) references employee (id);
alter table storage_product add constraint FKlo8nrn03mnkdr576dp1bxtd2q foreign key (product_id) references product (id);
alter table storage_product add constraint FKbtqr20lnfv1f5sy9q02eo853y foreign key (storage_id) references storage (id);
 
