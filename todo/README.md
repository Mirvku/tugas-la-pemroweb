# 📄 TODO API

API Todo List menyediakan fitur untuk menambahkan, menghapus dan memperbarui kegiatan di aplikasi Todo List. API ini dibuat untuk pembuatan aplikasi Todo List sebagai penyelesaian tugas akhir praktikum Pemrograman Web.

## **Getting started guide**

API ini dibuat menggunakan NestJS dan Prisma. Jadi sebelum menggunakan API ini diharapkan sudah menginstall NestJS dan juga Prisma. Bisa ikuti langkah berikut.

Install NestJS:

```bash
npm install -g @nestjs/cli

```

Kemudian jalankan command berikut untuk install library yang dibutuhkan (termasuk Prisma):

```bash
npm install

```

Jika instalasi berjalan dengan lancar dan tanpa error, API siap dijalankan.

Menjalankan server:

```bash
npm run start:dev

```

### **Need some help?**

Info lebih lanjut:

[Link docs NESTJS](https://docs.nestjs.com/)

Base URLs: alamat-api.com/todo

# Todo

API ini memiliki base path yaitu /todo. Pastikan sebelum menambah url API untuk menambahkan base path nya yaitu /todo sebelum endpoint API nya.

## GET Get data

GET /get-todos

Ini endpoint untuk menampilkan seluruh data yang ada di dalam database API.

> Response Examples

> 200 Response

```json
{}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## GET Get Data ByID

GET /get/1

Ini endpoint untuk mengambil data bedasrkan ID

> Response Examples

> 200 Response

```json
{}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## POST Post data

POST /add-todo

Endpoint ini untuk menginput data ke server. Data yg dikirim merupakan nama aktivitasnya.

### Params

| Name      | Location | Type   | Required | Description |
| --------- | -------- | ------ | -------- | ----------- |
| task_name | query    | string | yes      | none        |

> Response Examples

> 200 Response

```json
{}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## PUT Update data

PUT /info

Endpoint ini untuk mengupdate data.

### Params

| Name | Location | Type   | Required | Description |
| ---- | -------- | ------ | -------- | ----------- |
| id   | query    | string | yes      | none        |

> Response Examples

> 200 Response

```json
{}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |

### Responses Data Schema

## DELETE Delete data

DELETE /delete-todo

Endpoint ini untuk mengupdate data.

> Body Parameters

```json
{}
```

### Params

| Name | Location | Type   | Required | Description |
| ---- | -------- | ------ | -------- | ----------- |
| id   | query    | string | yes      | none        |
| body | body     | object | no       | none        |

> Response Examples

> 200 Response

```json
{}
```

### Responses

| HTTP Status Code | Meaning                                                 | Description | Data schema |
| ---------------- | ------------------------------------------------------- | ----------- | ----------- |
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline      |
