##Course creation process
1. Instructor creates verbatim for new course. DONE
2. If Instructor is not logged user is sent to signup/singin form DONE
3. After signin Instructor fills in details: duration of course and price per lesson. DONE
4. System checks if product with such price for lesson duration for this instructor exists. DONE
5. If does not exist a new product is created. Otherwise, create new document in products collection. instructor-lessonduration-price DONE
6. Create document in users collection expertise:{course:newcourse,productid:productid} DONE

Still to do:
1. Define user schema, so that *courses* nested collection is an array.
2. Data security
3. Routing after all is done