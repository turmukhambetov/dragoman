##Course creation process
1. Instructor creates verbatim for new course.
2. If Instructor is not logged user is sent to signup/singin form
3. After signin Instructor fills in details: duration of course and price per lesson.
4. System checks if product with such price for lesson duration for this instructor exists.
5. If does not exist a new product is created. Otherwise, create new document in products collection. instructor-lessonduration-price
6. Create document in users collection expertise:{course:newcourse,productid:productid}