def main():
    with open("./data.txt") as f:
        for line in f.readlines():
            temp = line.split(";")
            output = ""
            for idk in temp[::-1]:
                output += idk.replace("\n", "")
            print(output)
main()