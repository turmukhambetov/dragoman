##Course creation process
1. Instructor creates verbatim for new course. DONE
2. If Instructor is not logged user is sent to signup/singin form DONE
3. After signin Instructor fills in details: duration of course and price per lesson. DONE
4. System checks if product with such price for lesson duration for this instructor exists. DONE
5. If does not exist a new product is created. Otherwise, create new document in products collection. instructor-lessonduration-price DONE
6. Create document in users collection expertise:{course:newcourse,productid:productid} CANCELLED

Still to do:
1. Define user schema, so that *courses* nested collection is an array. CANCELLED
1. Courses are located in a separate collection DONE
2. Data security
3. Routing after all is done
4. Check, trim all inputs

##View my courses
1. Instructor selects *My Courses*
2. List all courses created by this instructor
3. Give link to open and edit any course.