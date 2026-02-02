// ==================== NGÂN HÀNG CÂU HỎI ====================
// Chủ đề: Phần I (Vũ trụ quan & Hình thái ý thức) + Phần II đến mục 3.1 (Phan Châu Trinh)
// TB = Dễ (7 giây), KH = Khó (10 giây), CK = Rất Khó (15 giây)

const questions = {
  // ==================== MỨC 1 - DỄ (7 giây) - TB ====================
  easy: [
    // Nhóm 1 — Triết lý "Nước"
    {
      type: "multipleChoice",
      question:
        'Một cộng đồng chọn "lùi một bước" để bảo toàn lực lượng, chờ thời cơ tái tổ chức. Cách ứng xử này gần nhất với:',
      options: [
        "A. Tấn công trực diện liên tục",
        "B. Tách rời hoàn toàn khỏi môi trường",
        'C. "Uốn lượn" để tích tụ lực',
        "D. Đóng kín, không tiếp xúc bên ngoài",
      ],
      answer: "C",
      explanation:
        '"Nước" không đối đầu trực diện, có thể tạm lùi để tích tụ năng lượng khi gặp vật cản/kẻ thù mạnh.',
    },
    {
      type: "multipleChoice",
      question:
        "Một quốc gia mở cửa tiếp thu công nghệ nhưng kiên quyết giữ lõi văn hóa nội sinh. Cách mô tả sát nhất:",
      options: [
        "A. Hòa tan để hiện đại hóa",
        "B. Cố định hóa bản sắc",
        "C. Chỉ chọn cái cũ để an toàn",
        'D. Mở–đóng theo "van tự động"',
      ],
      answer: "D",
      explanation:
        '"Van tự động" nghĩa là mở để tiếp nhận cái mới, đóng để giữ cốt lõi – "hòa nhập nhưng không hòa tan".',
    },
    {
      type: "multipleChoice",
      question:
        'Trong một cuộc khủng hoảng, thay vì "đốt giai đoạn", cộng đồng ưu tiên kết nối nhiều nhóm nhỏ thành liên minh. Hình ảnh phù hợp nhất:',
      options: [
        "A. Một tia lửa bùng lên",
        "B. Đá tảng đứng yên",
        "C. Các giọt nước kết tụ",
        "D. Gió thổi tản mác",
      ],
      answer: "C",
      explanation:
        '"Sức mạnh của sự kết tụ": một giọt yếu, nhưng kết tụ thành sông/biển thì rất mạnh.',
    },
    {
      type: "multipleChoice",
      question:
        "Một phong trào chia lực lượng thành nhiều hướng để mở rộng địa bàn nhưng vẫn giữ chung mục tiêu. Liên tưởng đúng nhất:",
      options: [
        "A. Một trung tâm – nhiều vua",
        'B. "Một bọc" – nhiều nhánh',
        "C. Một nhóm – một tuyến",
        "D. Một lần – một kết thúc",
      ],
      answer: "B",
      explanation:
        'Huyền thoại "một bọc (đồng bào)" giải thích chia tách để mở mang nhưng vẫn thống nhất.',
    },
    // Nhóm 2 — Tam giáo dung hợp
    {
      type: "multipleChoice",
      question:
        'Khi lòng trung thành chuyển từ "vua" sang "Nước/Dân", điểm thay đổi cốt lõi là:',
      options: [
        "A. Đổi trang phục quan lại",
        "B. Đổi đối tượng ưu tiên",
        "C. Đổi ngôn ngữ ngoại giao",
        "D. Đổi hệ chữ viết",
      ],
      answer: "B",
      explanation:
        'Đặt "Nước" và "Dân" lên trên "Vua" → đổi đối tượng ưu tiên/trung thành.',
    },
    {
      type: "multipleChoice",
      question:
        'Một cuộc vận động "mượn danh nghĩa" để quy tụ lực lượng, nhưng mục tiêu thực là cứu nước. Cách nhận diện phù hợp:',
      options: [
        "A. Hình thức trùng bản chất",
        "B. Hình thức quyết định tất cả",
        "C. Bản chất khác hình thức",
        "D. Không có mục tiêu",
      ],
      answer: "C",
      explanation:
        'Phong trào "mang danh giúp vua" nhưng thực chất mượn ngọn cờ vua để cứu nước → bản chất khác hình thức.',
    },
    {
      type: "multipleChoice",
      question:
        'Tình huống "giữ kỷ cương để huy động sức dân chống ngoại xâm" hợp nhất với vai trò:',
      options: [
        "A. Nho giáo",
        "B. Phật giáo",
        "C. Đạo giáo",
        "D. Hoài nghi luận",
      ],
      answer: "A",
      explanation:
        "Nho giáo cung cấp kỷ cương/chuẩn mực (Tam cương, Ngũ thường) để ổn định xã hội, huy động sức dân.",
    },
    {
      type: "multipleChoice",
      question:
        'Khi một truyền thống nhấn mạnh "cư trần lạc đạo", lựa chọn gần nhất là:',
      options: [
        "A. Sống đời, quên đạo",
        "B. Ở đời mà vẫn hành đạo",
        "C. Trốn đời để giữ đạo",
        "D. Đời là ảo, bỏ hết",
      ],
      answer: "B",
      explanation:
        '"Cư trần lạc đạo" được giải thích là ở đời mà vẫn vui đạo (nhập thế).',
    },
    {
      type: "multipleChoice",
      question: '"Hộ quốc an dân" hướng tới:',
      options: [
        "A. Mở rộng thuộc địa",
        "B. Tăng lễ nghi cung đình",
        "C. Bảo vệ đời sống dân",
        "D. Giảm giao thương",
      ],
      answer: "C",
      explanation:
        '"Hộ quốc an dân" nghĩa trọng tâm là giữ nước để an dân (bảo vệ đời sống cộng đồng).',
    },
    // Nhóm 3 — Nhà–Làng–Nước
    {
      type: "multipleChoice",
      question:
        'Nếu "Nhà" là tầng cơ sở, biểu hiện phù hợp nhất để chuyển hóa lên "Nước" là:',
      options: [
        "A. Tự do tuyệt đối",
        "B. Biết ơn nguồn cội",
        "C. Tránh mọi nghĩa vụ",
        "D. Xem nhẹ cộng đồng",
      ],
      answer: "B",
      explanation:
        'Yêu nước được mô tả là thăng hoa từ tình cảm gia đình/làng xóm lên ý thức quốc gia; "biết ơn nguồn cội" là cầu nối tự nhiên.',
    },
    {
      type: "multipleChoice",
      question: '"Làng" đóng vai trò đặc trưng nhất ở điểm:',
      options: [
        "A. Thiết chế tối cao",
        "B. Tầng trung gian cố kết",
        "C. Bộ máy ngoại giao",
        "D. Cơ quan lập pháp",
      ],
      answer: "B",
      explanation:
        '"Làng" như tầng trung gian lan tỏa tình cảm từ Nhà lên Nước.',
    },
    {
      type: "multipleChoice",
      question:
        "Khi trung tâm quyền lực bị chiếm nhưng xã hội vẫn khó bị đồng hóa, điều này gợi đến:",
      options: [
        "A. Thị trường tự điều tiết",
        "B. Công nghệ quyết định",
        "C. Tư duy cá nhân hóa",
        "D. Tầng cơ sở bền vững",
      ],
      answer: "D",
      explanation:
        "Dù chiếm trung tâm quyền lực, kẻ xâm lược khó đồng hóa vì hệ phòng thủ xã hội nhiều lớp, làng xã bền vững.",
    },
    {
      type: "multipleChoice",
      question:
        'So với mô hình "Cá nhân–Nhà nước" kiểu phương Tây, điểm khác nổi bật của "Nhà–Làng–Nước" là:',
      options: [
        "A. Thiếu luật pháp",
        "B. Không có cá nhân",
        "C. Có cộng đồng trung gian",
        "D. Không có nhà nước",
      ],
      answer: "C",
      explanation:
        'So với mô hình Tây phương "Cá nhân–Nhà nước", mô hình Việt nhấn mạnh cộng đồng trung gian (Làng).',
    },
    // Nhóm 4 — Phan Châu Trinh, Dân quyền
    {
      type: "multipleChoice",
      question:
        'Nếu cho rằng "trung quân" có thể tách khỏi "yêu nước", lập luận gần nhất là:',
      options: [
        "A. Vua luôn đúng",
        "B. Dân không cần tri thức",
        "C. Bạo lực là con đường",
        "D. Thể chế có thể không đại diện dân tộc",
      ],
      answer: "D",
      explanation:
        "Trung quân không đồng nghĩa yêu nước vì nhà nước thối nát không đại diện lợi ích dân tộc.",
    },
    {
      type: "multipleChoice",
      question:
        'Khi "dân trí chưa khai mở", lựa chọn bị phản đối mạnh nhất là:',
      options: [
        "A. Cải cách giáo dục",
        "B. Phổ cập pháp luật",
        "C. Mở mang thực nghiệp",
        "D. Bạo động cứu nước",
      ],
      answer: "D",
      explanation:
        "Phan Châu Trinh chuyển trọng tâm từ bạo lực sang cải cách xã hội từ bên trong; khi dân trí chưa vững, bạo động bị phê phán.",
    },
    {
      type: "multipleChoice",
      question: '"Chi bằng học" nhắm trực tiếp vào:',
      options: [
        "A. Xây nội lực tri thức",
        "B. Tăng lễ nghi",
        "C. Tôn sùng vương quyền",
        "D. Đóng cửa kinh tế",
      ],
      answer: "A",
      explanation:
        '"Chi bằng học" khẳng định tri thức là con đường duy nhất để thoát nô lệ → nhắm vào nội lực học tập/tri thức.',
    },
    {
      type: "multipleChoice",
      question:
        'Nếu yêu nước là "thức tỉnh lý trí xã hội", trọng tâm chuyển dịch là:',
      options: [
        "A. Cảm xúc → trí thức & quyền",
        "B. Lễ nghi → hình thức",
        "C. Quân sự → nghệ thuật",
        "D. Nông nghiệp → đô thị",
      ],
      answer: "A",
      explanation:
        "Yêu nước không chỉ cảm xúc mà là thức tỉnh lý trí xã hội, gắn với tri thức và dân quyền.",
    },
  ],

  // ==================== MỨC 2 - KHÓ (10 giây) - KH ====================
  medium: [
    // Nhóm 1 — Triết lý "Nước"
    {
      type: "multipleChoice",
      question:
        'Nếu coi "quốc gia" như "nước", rủi ro lớn nhất khi thiết kế thể chế là:',
      options: [
        "A. Quá cứng, khó đổi",
        "B. Quá chậm, thiếu lực",
        "C. Quá nhanh, thiếu người",
        "D. Quá lỏng, thiếu chuẩn",
      ],
      answer: "D",
      explanation:
        '"Tính lỏng" giúp sinh tồn nhưng nếu quá lỏng thì dễ bị hiểu như thiếu "điểm tựa", khó tạo trật tự/chuẩn chung.',
    },
    {
      type: "multipleChoice",
      question:
        'Một chính sách "đối đầu để chứng minh sức mạnh" sẽ bị phê phán mạnh nhất từ lăng kính:',
      options: [
        "A. Tôn ti trật tự",
        "B. Xuất thế tu hành",
        "C. Nhu tính bền bỉ",
        "D. Ngẫu nhiên định mệnh",
      ],
      answer: "C",
      explanation:
        'Triết lý "Nước" đề cao nhu tính, bền bỉ, tránh đối đầu thô bạo; "đối đầu để chứng minh sức mạnh" đi ngược tinh thần đó.',
    },
    {
      type: "multipleChoice",
      question:
        'Khi nói "chở thuyền" và "lật thuyền", điều nhấn mạnh chủ yếu là:',
      options: [
        "A. Kỹ thuật đóng thuyền",
        "B. Quyền lực cá nhân",
        "C. May rủi lịch sử",
        "D. Sức mạnh tập thể",
      ],
      answer: "D",
      explanation:
        '"Chở thuyền/lật thuyền" nói về sức mạnh tập thể khi kết tụ (dân/cộng đồng).',
    },
    {
      type: "multipleChoice",
      question:
        'Một mô hình phát triển "bùng nổ ngắn hạn" được ví gần với "Lửa". Phản đề tương ứng với "Nước" là:',
      options: [
        "A. Thống trị tuyệt đối",
        "B. Tách biệt triệt để",
        "C. Phô trương liên tục",
        "D. Ổn định dài hạn",
      ],
      answer: "D",
      explanation:
        'Lửa = bùng nổ, trực diện; Nước = bền bỉ, nhu hòa → phản đề của "bùng nổ ngắn hạn" là "ổn định dài hạn".',
    },
    // Nhóm 2 — Tam giáo dung hợp
    {
      type: "multipleChoice",
      question:
        'Trong logic "vô úy" gắn với bảo vệ cộng đồng, hành động hợp nhất là:',
      options: [
        "A. Giữ im lặng mọi lúc",
        "B. Từ bỏ mọi trách nhiệm",
        "C. Can đảm vì sự sống chung",
        "D. Chỉ lo tu dưỡng cá nhân",
      ],
      answer: "C",
      explanation:
        '"Vô úy" gắn với tinh thần nhập thế/hộ quốc an dân → can đảm vì lợi ích chung, không phải rút lui khỏi trách nhiệm.',
    },
    {
      type: "multipleChoice",
      question:
        'Một chiến lược "lấy yếu chống mạnh" bằng cách tận dụng địa hình và thời cơ gần nhất với:',
      options: [
        "A. Tam cương, ngũ thường",
        "B. Xuất thế, đoạn dục",
        "C. Duy vật cơ giới",
        "D. Thuận thiên, vô vi",
      ],
      answer: "D",
      explanation:
        '"Lấy yếu chống mạnh" bằng linh hoạt, thuận thời thế gần với tinh thần nhu thắng cương/uyển chuyển (tương ứng "nước").',
    },
    {
      type: "multipleChoice",
      question:
        'Trong ngoại giao, "kiên định nguyên tắc, mềm dẻo phương pháp" tương ứng với:',
      options: [
        'A. "Bất biến" và "vạn biến"',
        "B. Quyền lực tuyệt đối",
        "C. Tư lợi ngắn hạn",
        "D. Cắt đứt quan hệ",
      ],
      answer: "A",
      explanation:
        '"Bất biến/vạn biến" là cách nói đúng tinh thần giữ lõi nhưng thay phương pháp (giống "van tự động").',
    },
    {
      type: "multipleChoice",
      question: 'Khi một hệ tư tưởng được "Việt hóa", điều đó hàm ý:',
      options: [
        "A. Sao chép nguyên mẫu",
        "B. Phủ nhận hoàn toàn nguồn gốc",
        "C. Chọn lọc theo mục tiêu tồn tại",
        "D. Giữ nguyên mọi giáo điều",
      ],
      answer: "C",
      explanation:
        '"Việt hóa" là tiếp thu có mục đích, chọn lọc để phục vụ "Tồn tại & Độc lập", không tiếp thu thụ động.',
    },
    // Nhóm 3 — Nhà–Làng–Nước
    {
      type: "multipleChoice",
      question:
        'Nếu "Làng" suy yếu nhanh, mạch nuôi dưỡng lòng yêu nước có nguy cơ:',
      options: [
        "A. Chuyển thẳng sang pháp lý thuần túy",
        "B. Tự động tăng tính cố kết",
        "C. Không còn xung đột xã hội",
        "D. Mất kênh chuyển hóa giá trị gần gũi",
      ],
      answer: "D",
      explanation:
        'Nếu "Làng" suy yếu, sẽ mất kênh chuyển hóa giá trị gần gũi (nhà → làng → nước), làm đứt mạch thẩm thấu.',
    },
    {
      type: "multipleChoice",
      question:
        'Một chương trình giáo dục chỉ nhấn vào nghĩa vụ với Nhà nước mà bỏ qua gia đình–cộng đồng sẽ "thiếu" nhất ở:',
      options: [
        "A. Tính biểu tượng",
        "B. Khả năng ra quyết định",
        "C. Kỹ năng kỹ thuật",
        "D. Nền tảng đạo đức thường nhật",
      ],
      answer: "D",
      explanation:
        "Bỏ qua gia đình–cộng đồng sẽ thiếu nền chuẩn mực đạo đức thường nhật vốn hình thành từ hai tầng dưới.",
    },
    {
      type: "multipleChoice",
      question:
        'Câu "nhà tan thì nước mất, nước mất thì nhà tan" hàm ý quan hệ:',
      options: [
        "A. Một chiều từ trên xuống",
        "B. Không liên quan nhau",
        "C. Hai chiều phụ thuộc",
        "D. Chỉ mang tính ẩn dụ",
      ],
      answer: "C",
      explanation:
        '"Nước" là mái nhà chung nhưng sự phục tùng lợi ích quốc gia không cưỡng ép thuần túy, mà dựa logic đạo đức từ Nhà–Làng → quan hệ hai chiều phụ thuộc.',
    },
    // Nhóm 4 — Phan Châu Trinh, Dân quyền
    {
      type: "multipleChoice",
      question:
        'Trong bộ ba "Khai dân trí – Chấn dân khí – Hậu dân sinh", bước tạo nền cho hai bước còn lại là:',
      options: [
        "A. Khai dân trí",
        "B. Hậu dân sinh",
        "C. Chấn dân khí",
        "D. Tất cả đồng thời, không thứ tự",
      ],
      answer: "A",
      explanation:
        '"Khai dân trí" được đặt "trước hết là phải học", làm nền cho các trụ cột còn lại.',
    },
    {
      type: "multipleChoice",
      question:
        "Một phong trào chỉ hô hào hy sinh nhưng bỏ qua năng lực nghề nghiệp–kinh tế sẽ thiếu nhất ở trụ cột:",
      options: ["A. Dân trí", "B. Dân khí", "C. Danh phận", "D. Dân sinh"],
      answer: "D",
      explanation:
        'Nếu chỉ hô hy sinh mà bỏ nghề nghiệp–kinh tế thì thiếu "Hậu dân sinh" (nền vật chất để duy trì xã hội độc lập).',
    },
    {
      type: "multipleChoice",
      question:
        'Nếu mục tiêu là "dân quyền", hành động nào phù hợp hơn về logic?',
      options: [
        "A. Dạy quyền–nghĩa vụ công dân",
        "B. Giữ dân trong ngu muội để dễ trị",
        "C. Tôn thờ bạo lực như cứu cánh",
        "D. Đồng nhất yêu nước với phục tùng",
      ],
      answer: "A",
      explanation:
        'Dân quyền cần hiểu quyền & nghĩa vụ công dân; tài liệu nêu rõ "học về quyền và nghĩa vụ công dân".',
    },
    {
      type: "multipleChoice",
      question:
        'Lập trường "phản đối bạo động khi dân khí chưa vững" hàm ý tiêu chuẩn đánh giá hành động là:',
      options: [
        "A. Độ ồn truyền thông",
        "B. Lợi ích nhóm nhỏ",
        "C. Sự hài lòng tức thời",
        "D. Tính bền vững độc lập",
      ],
      answer: "D",
      explanation:
        'Tiêu chuẩn là tính bền vững nội lực: nguyên nhân mất nước không chỉ do quân sự mà do "yếu kém nội lực"; nên chọn cách làm bền vững.',
    },
  ],

  // ==================== MỨC 3 - RẤT KHÓ (15 giây) - CK ====================
  hard: [
    // Nhóm 1 — Triết lý "Nước"
    {
      type: "multipleChoice",
      question:
        'Trong chiến lược "nước", hành động nào mâu thuẫn nhất với tinh thần thích ứng?',
      options: [
        "A. Từ chối mọi điều chỉnh",
        "B. Thay đổi phương thức theo hoàn cảnh",
        "C. Duy trì bản chất cốt lõi",
        "D. Lựa thời điểm để phản công",
      ],
      answer: "A",
      explanation:
        '"Nước" cốt ở thích ứng theo hoàn cảnh; "từ chối mọi điều chỉnh" mâu thuẫn nhất.',
    },
    {
      type: "multipleChoice",
      question:
        '"Tính lỏng" vừa là sức mạnh vừa là nguy cơ. Nguy cơ tinh vi nhất là:',
      options: [
        "A. Thiếu lãnh đạo",
        "B. Không có nguồn lực",
        "C. Dễ bị hiểu nhầm là vô nguyên tắc",
        "D. Không có truyền thông",
      ],
      answer: "C",
      explanation:
        'Nguy cơ tinh vi của "lỏng" là bị hiểu nhầm thành vô nguyên tắc, trong khi tài liệu nhấn "mở/đóng để giữ cốt lõi".',
    },
    // Nhóm 2 — Tam giáo dung hợp
    {
      type: "multipleChoice",
      question:
        'Nếu đặt "Tồn tại & Độc lập" làm tiêu chuẩn, hành vi nào ít phù hợp nhất với tinh thần dung hợp?',
      options: [
        "A. Đồng nhất mọi thứ thành một",
        "B. Gạn lọc cái hữu ích",
        "C. Điều chỉnh theo bối cảnh",
        "D. Bảo lưu cốt lõi",
      ],
      answer: "A",
      explanation:
        'Dung hợp là "gạn đục khơi trong", không đồng nhất mọi thứ thành một.',
    },
    {
      type: "multipleChoice",
      question:
        "Một nhà lãnh đạo tu hành nhưng vẫn quản trị biên cương và cải hóa xã hội phản ánh mạnh nhất:",
      options: [
        "A. Phật giáo nhập thế",
        "B. Phật giáo yếm thế",
        "C. Đạo giáo thần bí",
        "D. Nho giáo pháp gia",
      ],
      answer: "A",
      explanation:
        'Sự đối lập "yếm thế" với "nhập thế"; hình mẫu "đạo–đời" phản ánh Phật giáo nhập thế.',
    },
    {
      type: "multipleChoice",
      question:
        'Tư duy "trung nghĩa" (đặt Nước/Dân lên trên Vua) sẽ xử lý mâu thuẫn "lệnh vua gây hại dân" theo hướng:',
      options: [
        "A. Tuân lệnh vô điều kiện",
        "B. Né tránh mọi quyết định",
        "C. Ưu tiên lợi ích dân tộc",
        "D. Chuyển sang lợi ích cá nhân",
      ],
      answer: "C",
      explanation:
        'Khi vua không đại diện lợi ích dân tộc, "Trung" chuyển hóa thành "Nghĩa" → ưu tiên Nước/Dân.',
    },
    {
      type: "multipleChoice",
      question:
        'Nếu hiểu sai "vô vi" thành "không làm gì", hệ quả dễ gặp nhất là:',
      options: [
        "A. Tăng linh hoạt chiến lược",
        "B. Mất khả năng hành động đúng lúc",
        "C. Tối ưu nguồn lực",
        "D. Tăng đoàn kết cộng đồng",
      ],
      answer: "B",
      explanation:
        'Hiểu sai "vô vi" thành "không làm gì" sẽ làm mất năng lực hành động đúng lúc, trái tinh thần "linh hoạt thích ứng".',
    },
    {
      type: "multipleChoice",
      question: 'Trong khung Nho–Phật–Lão, cặp ghép nào "lệch" nhất?',
      options: [
        "A. Nho – kỷ cương xã hội",
        "B. Nho – phủ nhận trật tự",
        "C. Phật – hộ quốc an dân",
        "D. Lão – nhu thắng cương",
      ],
      answer: "B",
      explanation:
        'Nho giáo gắn với trật tự/kỷ cương; "Nho = phủ nhận trật tự" là ghép sai.',
    },
    {
      type: "multipleChoice",
      question:
        'Khi nói "tránh đối đầu trực diện lúc địch mạnh", điểm nhấn nằm ở:',
      options: [
        "A. Quản trị nhịp độ xung đột",
        "B. Sức mạnh vũ khí",
        "C. Phô trương biểu tượng",
        "D. Thống nhất khẩu hiệu",
      ],
      answer: "A",
      explanation:
        '"Tránh đối đầu trực diện lúc địch mạnh" là quản trị nhịp độ xung đột: lùi–tích tụ–chờ thời cơ.',
    },
    // Nhóm 3 — Nhà–Làng–Nước
    {
      type: "multipleChoice",
      question:
        'Trong một xã hội hiện đại, giải pháp nào giữ đúng tinh thần "tầng trung gian" mà vẫn phù hợp đô thị hóa?',
      options: [
        "A. Xóa hết hội đoàn",
        "B. Tăng không gian sinh hoạt cộng đồng",
        "C. Cấm mạng xã hội",
        "D. Chỉ học ở nhà trường",
      ],
      answer: "B",
      explanation:
        'Giữ tinh thần "tầng trung gian" trong hiện đại là tái tạo không gian/cơ chế cộng đồng, không xóa bỏ hội đoàn.',
    },
    {
      type: "multipleChoice",
      question:
        'Nếu "Làng" là "môi trường đệm", chức năng "đệm" thể hiện rõ nhất khi:',
      options: [
        "A. Luật quốc gia bị thay bằng luật rừng",
        "B. Gia đình tách khỏi xã hội",
        "C. Chuẩn mực quốc gia được biến thành lệ sống",
        "D. Cá nhân phủ nhận mọi ràng buộc",
      ],
      answer: "C",
      explanation:
        '"Đệm" nghĩa là biến chuẩn mực quốc gia thành lệ sống tại cộng đồng; yêu nước thẩm thấu từ Nhà → Làng → Nước.',
    },
    {
      type: "multipleChoice",
      question:
        'Khi lòng yêu nước được hình thành chủ yếu ở bình diện "ý thức pháp lý", điểm dễ thiếu so với mô hình Việt Nam là:',
      options: [
        "A. Kỷ luật xã hội",
        "B. Sự thẩm thấu văn hóa cơ sở",
        "C. Hiệu lực thể chế",
        "D. Tính rõ ràng quy tắc",
      ],
      answer: "B",
      explanation:
        'Mô hình phương Tây thiên về "ý thức pháp lý"; khi thiếu tầng Làng thì thiếu sự thẩm thấu văn hóa cơ sở.',
    },
    // Nhóm 4 — Phan Châu Trinh, Dân quyền
    {
      type: "multipleChoice",
      question:
        '"Chấn dân khí" nếu bị hiểu lệch thành "kích động cực đoan" sẽ mâu thuẫn với:',
      options: [
        "A. Tự tôn dân tộc",
        "B. Lý trí xã hội tỉnh táo",
        "C. Dám đấu tranh chính đáng",
        "D. Khát vọng vươn lên",
      ],
      answer: "B",
      explanation:
        '"Chấn dân khí" là vực dậy tự tôn & dám đấu tranh chính đáng; hiểu lệch thành cực đoan sẽ trái với "yêu nước là thức tỉnh lý trí xã hội".',
    },
    {
      type: "multipleChoice",
      question:
        'Một chương trình "mở trường dạy khoa học–kỹ thuật, giảm học từ chương, cổ vũ thực nghiệp" tương ứng mạnh nhất với:',
      options: [
        "A. Chấn dân khí",
        "B. Hậu dân sinh",
        "C. Khai dân trí",
        "D. Trung quân",
      ],
      answer: "C",
      explanation:
        'Mở trường khoa học–kỹ thuật, bỏ từ chương, cổ vũ thực nghiệp chính là mô tả "Khai dân trí".',
    },
    {
      type: "multipleChoice",
      question:
        'Trong logic của Phan Châu Trinh, "cứu nước" bền vững đòi hỏi điều kiện nào trước tiên?',
      options: [
        "A. Nâng nội lực xã hội",
        "B. Thắng một trận lớn",
        "C. Có lãnh tụ quân sự",
        "D. Cắt đứt giao thương",
      ],
      answer: "A",
      explanation:
        "Cốt lõi là nâng nội lực xã hội (tri thức, dân quyền, phát triển con người), không phải thắng 1 trận.",
    },
    {
      type: "multipleChoice",
      question:
        'Nếu một nhà nước "thối nát" không đại diện lợi ích dân tộc, lựa chọn nào giữ đúng tinh thần "dân quyền" mà vẫn tránh hỗn loạn?',
      options: [
        "A. Cải cách xã hội từ bên trong",
        "B. Thần phục tuyệt đối",
        "C. Đốt phá mọi thiết chế",
        "D. Rút lui khỏi đời sống công",
      ],
      answer: "A",
      explanation:
        "Con đường được nhấn mạnh là cải cách xã hội từ bên trong, thay vì phá hủy mọi thiết chế.",
    },
    {
      type: "multipleChoice",
      question:
        '"Hậu dân sinh" khi được ưu tiên sai cách (chỉ chạy theo giàu nhanh) sẽ làm lệch mục tiêu vì thiếu:',
      options: [
        "A. Kỷ luật lao động",
        "B. Động lực cạnh tranh",
        "C. Nền đạo đức–chính trị đi kèm",
        "D. Tăng trưởng số liệu",
      ],
      answer: "C",
      explanation:
        '"Hậu dân sinh" cần đi cùng mục tiêu độc lập & tiến bộ; nếu chỉ chạy "giàu nhanh" mà thiếu nền đạo đức–chính trị sẽ lệch tinh thần.',
    },
    {
      type: "multipleChoice",
      question:
        "Một phong trào đòi quyền nhưng thiếu năng lực học hỏi–tổ chức dễ rơi vào:",
      options: [
        "A. Dân quyền bền vững",
        "B. Bột phát rồi suy tàn",
        "C. Cải cách có lộ trình",
        "D. Tích lũy tri thức",
      ],
      answer: "B",
      explanation:
        'Phê phán hành động "bột phát"; nếu thiếu học hỏi–tổ chức thì dễ bột phát rồi suy tàn.',
    },
    {
      type: "multipleChoice",
      question:
        'Trong ba trụ cột Tam Dân, cặp nào dễ "đứt gãy" nhất nếu bỏ qua giáo dục?',
      options: ["A. Khí–sinh", "B. Trí–khí", "C. Trí–sinh", "D. Trí–danh"],
      answer: "B",
      explanation:
        'Nếu bỏ giáo dục, "Dân trí" suy giảm kéo theo "Dân khí" (khí thế/tự tôn) khó bền; Khai dân trí làm nền, rồi mới chấn dân khí.',
    },
  ],
};

// Xuất để sử dụng trong file HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = questions;
}
