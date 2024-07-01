```mermaid
erDiagram

  "users" {
    String id "🗝️"
    String name 
    String email 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "dynamics" {
    Int id "🗝️"
    String title 
    String overview 
    Boolean published 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "chapters" {
    Int id "🗝️"
    String title 
    Int order 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "pages" {
    Int id "🗝️"
    String title 
    Int order 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "sections" {
    Int id "🗝️"
    String name 
    Int order 
    String text 
    Int textSize 
    Int termId "❓"
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "folders" {
    Int id "🗝️"
    String name 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "impressions" {
    Int id "🗝️"
    Int rate 
    String title 
    String text 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "marks" {
    Int id "🗝️"
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "type_of_sections" {
    Int id "🗝️"
    String name 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "type_of_positions" {
    Int id "🗝️"
    String name 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "type_of_animations" {
    Int id "🗝️"
    String name 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "type_of_colors" {
    Int id "🗝️"
    String name 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "images" {
    Int id "🗝️"
    String name 
    String path 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "type_of_images" {
    Int id "🗝️"
    String name 
    String ratio 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "type_of_fonts" {
    Int id "🗝️"
    String name 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "terms" {
    Int id "🗝️"
    String name 
    String text 
    Int order 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "tags" {
    Int id "🗝️"
    String name 
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "dynamics_on_tags" {
    Int id "🗝️"
    DateTime createdAt 
    DateTime updatedAt 
    }
  

  "type_of_sorts" {
    Int id "🗝️"
    String name 
    String sql 
    DateTime createdAt 
    DateTime updatedAt 
    }
  
    "users" o{--}o "dynamics" : "dynamics"
    "users" o{--}o "marks" : "marks"
    "users" o{--}o "impressions" : "impressions"
    "users" o{--}o "folders" : "folders"
    "users" o{--}o "images" : "images"
    "dynamics" o{--}o "images" : "image"
    "dynamics" o|--|| "users" : "user"
    "dynamics" o{--}o "chapters" : "chapters"
    "dynamics" o{--}o "impressions" : "impressions"
    "dynamics" o{--}o "marks" : "marks"
    "dynamics" o{--}o "terms" : "terms"
    "dynamics" o{--}o "dynamics_on_tags" : "tags"
    "chapters" o|--|| "dynamics" : "dynamic"
    "chapters" o{--}o "pages" : "pages"
    "chapters" o{--}o "terms" : "terms"
    "pages" o|--|| "chapters" : "chapter"
    "pages" o{--}o "sections" : "sections"
    "pages" o{--}o "terms" : "terms"
    "sections" o|--|| "pages" : "page"
    "sections" o|--|| "type_of_sections" : "type"
    "sections" o|--|o "type_of_positions" : "position"
    "sections" o|--|o "type_of_animations" : "animation"
    "sections" o|--|| "type_of_fonts" : "font"
    "sections" o|--|| "type_of_colors" : "frameColor"
    "sections" o|--|| "type_of_colors" : "textColor"
    "sections" o{--}o "terms" : "term"
    "sections" o|--|o "images" : "image"
    "folders" o|--|| "users" : "user"
    "folders" o|--|o "folders" : "parent"
    "folders" o{--}o "folders" : "children"
    "folders" o{--}o "images" : "images"
    "impressions" o|--|| "users" : "user"
    "impressions" o|--|| "dynamics" : "dynamic"
    "marks" o|--|| "users" : "user"
    "marks" o|--|| "dynamics" : "dynamic"
    "type_of_sections" o{--}o "sections" : "sections"
    "type_of_positions" o{--}o "sections" : "sections"
    "type_of_animations" o{--}o "sections" : "sections"
    "type_of_colors" o{--}o "sections" : "frame"
    "type_of_colors" o{--}o "sections" : "text"
    "images" o|--|| "users" : "user"
    "images" o|--|| "type_of_images" : "type"
    "images" o|--|o "dynamics" : "dynamic"
    "images" o{--}o "sections" : "section"
    "images" o|--|o "folders" : "folder"
    "images" o{--}o "terms" : "term"
    "type_of_images" o{--}o "images" : "image"
    "type_of_fonts" o{--}o "sections" : "sections"
    "terms" o|--|o "dynamics" : "dynamic"
    "terms" o|--|o "chapters" : "chapter"
    "terms" o|--|o "pages" : "page"
    "terms" o|--|o "sections" : "section"
    "terms" o|--|o "images" : "image"
    "tags" o{--}o "dynamics_on_tags" : "dynamics"
    "dynamics_on_tags" o|--|| "dynamics" : "dynamic"
    "dynamics_on_tags" o|--|| "tags" : "tag"
```
