
from file_processing import download_file, process_file, save_file

def main():
    # Download file
    file_url = "https://example.com/file.txt"
    file_path = download_file(file_url)

    # Process file
    processed_data = process_file(file_path)

    # Save file in CSV format
    save_file(processed_data, "output.csv")

if __name__ == "__main__":
    main()
