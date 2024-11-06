import hashlib


def calculate_md5(input_string):
    # 创建 sha256 哈希对象
    md5_hash = hashlib.sha256()
    # 更新哈希对象，确保输入是字节类型
    md5_hash.update(input_string.encode("utf-8"))
    # 获取十六进制表示的 MD5 值
    return md5_hash.hexdigest()


if __name__ == "__main__":
    input_string = "root"
    md5_value = calculate_md5(input_string)
    print(f"MD5值: {md5_value}")
