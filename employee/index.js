const express = require('express'); // เรียกใช้งานโมดูล express
const router = express.Router(); // สร้าง Router ใหม่ของ Express

const { listAction, removeAction, formAction, saveAction } = require('./controller'); // เรียกใช้งานฟังก์ชันจากไฟล์ controller

router.get('/', listAction); // กำหนดการเรียกใช้งาน listAction เมื่อมีการเรียกเส้นทางหลัก
router.get('/delete/:id', removeAction); // กำหนดการเรียกใช้งาน removeAction เมื่อมีการเรียกเส้นทาง /delete/:id
router.get('/form/:id?', formAction); // กำหนดการเรียกใช้งาน formAction เมื่อมีการเรียกเส้นทาง /form/:id โดย :id เป็นทางเลือก
router.post('/save', saveAction); // กำหนดการเรียกใช้งาน saveAction เมื่อมีการส่งข้อมูลผ่านเมธอด POST ไปยังเส้นทาง /save

module.exports = router; // ส่งออก Router เพื่อให้สามารถนำไปใช้งานได้ที่อื่นๆ
