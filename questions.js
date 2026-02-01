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
        'B. "Uốn lượn" để tích tụ lực',
        "C. Tách rời hoàn toàn khỏi môi trường",
        "D. Đóng kín, không tiếp xúc bên ngoài",
      ],
      answer: "B",
      explanation:
        '"Nước" không đối đầu trực diện, có thể tạm lùi để tích tụ năng lượng khi gặp vật cản/kẻ thù mạnh.',
    },
    {
      type: "multipleChoice",
      question:
        "Một quốc gia mở cửa tiếp thu công nghệ nhưng kiên quyết giữ lõi văn hóa nội sinh. Cách mô tả sát nhất:",
      options: [
        "A. Hòa tan để hiện đại hóa",
        'B. Mở–đóng theo "van tự động"',
        "C. Cố định hóa bản sắc",
        "D. Chỉ chọn cái cũ để an toàn",
      ],
      answer: "B",
      explanation:
        '"Van tự động" nghĩa là mở để tiếp nhận cái mới, đóng để giữ cốt lõi – "hòa nhập nhưng không hòa tan".',
    },
    {
      type: "multipleChoice",
      question:
        'Trong một cuộc khủng hoảng, thay vì "đốt giai đoạn", cộng đồng ưu tiên kết nối nhiều nhóm nhỏ thành liên minh. Hình ảnh phù hợp nhất:',
      options: [
        "A. Một tia lửa bùng lên",
        "B. Các giọt nước kết tụ",
        "C. Đá tảng đứng yên",
        "D. Gió thổi tản mác",
      ],
      answer: "B",
      explanation:
        '"Sức mạnh của sự kết tụ": một giọt yếu, nhưng kết tụ thành sông/biển thì rất mạnh.',
    },
    {
      type: "multipleChoice",
      question:
        "Một phong trào chia lực lượng thành nhiều hướng để mở rộng địa bàn nhưng vẫn giữ chung mục tiêu. Liên tưởng đúng nhất:",
      options: [
        'A. "Một bọc" – nhiều nhánh',
        "B. Một trung tâm – nhiều vua",
        "C. Một nhóm – một tuyến",
        "D. Một lần – một kết thúc",
      ],
      answer: "A",
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
        "B. Bản chất khác hình thức",
        "C. Hình thức quyết định tất cả",
        "D. Không có mục tiêu",
      ],
      answer: "B",
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
        "B. Bảo vệ đời sống dân",
        "C. Tăng lễ nghi cung đình",
        "D. Giảm giao thương",
      ],
      answer: "B",
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
        "A. Tầng cơ sở bền vững",
        "B. Thị trường tự điều tiết",
        "C. Công nghệ quyết định",
        "D. Tư duy cá nhân hóa",
      ],
      answer: "A",
      explanation:
        "Dù chiếm trung tâm quyền lực, kẻ xâm lược khó đồng hóa vì hệ phòng thủ xã hội nhiều lớp, làng xã bền vững.",
    },
    {
      type: "multipleChoice",
      question:
        'So với mô hình "Cá nhân–Nhà nước" kiểu phương Tây, điểm khác nổi bật của "Nhà–Làng–Nước" là:',
      options: [
        "A. Thiếu luật pháp",
        "B. Có cộng đồng trung gian",
        "C. Không có cá nhân",
        "D. Không có nhà nước",
      ],
      answer: "B",
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
        "B. Thể chế có thể không đại diện dân tộc",
        "C. Dân không cần tri thức",
        "D. Bạo lực là con đường",
      ],
      answer: "B",
      explanation:
        "Trung quân không đồng nghĩa yêu nước vì nhà nước thối nát không đại diện lợi ích dân tộc.",
    },
    {
      type: "multipleChoice",
      question:
        'Khi "dân trí chưa khai mở", lựa chọn bị phản đối mạnh nhất là:',
      options: [
        "A. Cải cách giáo dục",
        "B. Bạo động cứu nước",
        "C. Phổ cập pháp luật",
        "D. Mở mang thực nghiệp",
      ],
      answer: "B",
      explanation:
        "Phan Châu Trinh chuyển trọng tâm từ bạo lực sang cải cách xã hội từ bên trong; khi dân trí chưa vững, bạo động bị phê phán.",
    },
    {
      type: "multipleChoice",
      question: '"Chi bằng học" nhắm trực tiếp vào:',
      options: [
        "A. Tăng lễ nghi",
        "B. Xây nội lực tri thức",
        "C. Tôn sùng vương quyền",
        "D. Đóng cửa kinh tế",
      ],
      answer: "B",
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
        "B. Quá lỏng, thiếu chuẩn",
        "C. Quá chậm, thiếu lực",
        "D. Quá nhanh, thiếu người",
      ],
      answer: "B",
      explanation:
        '"Tính lỏng" giúp sinh tồn nhưng nếu quá lỏng thì dễ bị hiểu như thiếu "điểm tựa", khó tạo trật tự/chuẩn chung.',
    },
    {
      type: "multipleChoice",
      question:
        'Một chính sách "đối đầu để chứng minh sức mạnh" sẽ bị phê phán mạnh nhất từ lăng kính:',
      options: [
        "A. Nhu tính bền bỉ",
        "B. Tôn ti trật tự",
        "C. Xuất thế tu hành",
        "D. Ngẫu nhiên định mệnh",
      ],
      answer: "A",
      explanation:
        'Triết lý "Nước" đề cao nhu tính, bền bỉ, tránh đối đầu thô bạo; "đối đầu để chứng minh sức mạnh" đi ngược tinh thần đó.',
    },
    {
      type: "multipleChoice",
      question:
        'Khi nói "chở thuyền" và "lật thuyền", điều nhấn mạnh chủ yếu là:',
      options: [
        "A. Kỹ thuật đóng thuyền",
        "B. Sức mạnh tập thể",
        "C. Quyền lực cá nhân",
        "D. May rủi lịch sử",
      ],
      answer: "B",
      explanation:
        '"Chở thuyền/lật thuyền" nói về sức mạnh tập thể khi kết tụ (dân/cộng đồng).',
    },
    {
      type: "multipleChoice",
      question:
        'Một mô hình phát triển "bùng nổ ngắn hạn" được ví gần với "Lửa". Phản đề tương ứng với "Nước" là:',
      options: [
        "A. Ổn định dài hạn",
        "B. Thống trị tuyệt đối",
        "C. Tách biệt triệt để",
        "D. Phô trương liên tục",
      ],
      answer: "A",
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
        "B. Can đảm vì sự sống chung",
        "C. Từ bỏ mọi trách nhiệm",
        "D. Chỉ lo tu dưỡng cá nhân",
      ],
      answer: "B",
      explanation:
        '"Vô úy" gắn với tinh thần nhập thế/hộ quốc an dân → can đảm vì lợi ích chung, không phải rút lui khỏi trách nhiệm.',
    },
    {
      type: "multipleChoice",
      question:
        'Một chiến lược "lấy yếu chống mạnh" bằng cách tận dụng địa hình và thời cơ gần nhất với:',
      options: [
        "A. Thuận thiên, vô vi",
        "B. Tam cương, ngũ thường",
        "C. Xuất thế, đoạn dục",
        "D. Duy vật cơ giới",
      ],
      answer: "A",
      explanation:
        '"Lấy yếu chống mạnh" bằng linh hoạt, thuận thời thế gần với tinh thần nhu thắng cương/uyển chuyển (tương ứng "nước").',
    },
    {
      type: "multipleChoice",
      question:
        'Trong ngoại giao, "kiên định nguyên tắc, mềm dẻo phương pháp" tương ứng với:',
      options: [
        "A. Quyền lực tuyệt đối",
        'B. "Bất biến" và "vạn biến"',
        "C. Tư lợi ngắn hạn",
        "D. Cắt đứt quan hệ",
      ],
      answer: "B",
      explanation:
        '"Bất biến/vạn biến" là cách nói đúng tinh thần giữ lõi nhưng thay phương pháp (giống "van tự động").',
    },
    {
      type: "multipleChoice",
      question: 'Khi một hệ tư tưởng được "Việt hóa", điều đó hàm ý:',
      options: [
        "A. Sao chép nguyên mẫu",
        "B. Chọn lọc theo mục tiêu tồn tại",
        "C. Phủ nhận hoàn toàn nguồn gốc",
        "D. Giữ nguyên mọi giáo điều",
      ],
      answer: "B",
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
        "B. Mất kênh chuyển hóa giá trị gần gũi",
        "C. Tự động tăng tính cố kết",
        "D. Không còn xung đột xã hội",
      ],
      answer: "B",
      explanation:
        'Nếu "Làng" suy yếu, sẽ mất kênh chuyển hóa giá trị gần gũi (nhà → làng → nước), làm đứt mạch thẩm thấu.',
    },
    {
      type: "multipleChoice",
      question:
        'Một chương trình giáo dục chỉ nhấn vào nghĩa vụ với Nhà nước mà bỏ qua gia đình–cộng đồng sẽ "thiếu" nhất ở:',
      options: [
        "A. Tính biểu tượng",
        "B. Nền tảng đạo đức thường nhật",
        "C. Khả năng ra quyết định",
        "D. Kỹ năng kỹ thuật",
      ],
      answer: "B",
      explanation:
        "Bỏ qua gia đình–cộng đồng sẽ thiếu nền chuẩn mực đạo đức thường nhật vốn hình thành từ hai tầng dưới.",
    },
    {
      type: "multipleChoice",
      question:
        'Câu "nhà tan thì nước mất, nước mất thì nhà tan" hàm ý quan hệ:',
      options: [
        "A. Một chiều từ trên xuống",
        "B. Hai chiều phụ thuộc",
        "C. Không liên quan nhau",
        "D. Chỉ mang tính ẩn dụ",
      ],
      answer: "B",
      explanation:
        '"Nước" là mái nhà chung nhưng sự phục tùng lợi ích quốc gia không cưỡng ép thuần túy, mà dựa logic đạo đức từ Nhà–Làng → quan hệ hai chiều phụ thuộc.',
    },
    // Nhóm 4 — Phan Châu Trinh, Dân quyền
    {
      type: "multipleChoice",
      question:
        'Trong bộ ba "Khai dân trí – Chấn dân khí – Hậu dân sinh", bước tạo nền cho hai bước còn lại là:',
      options: [
        "A. Hậu dân sinh",
        "B. Chấn dân khí",
        "C. Khai dân trí",
        "D. Tất cả đồng thời, không thứ tự",
      ],
      answer: "C",
      explanation:
        '"Khai dân trí" được đặt "trước hết là phải học", làm nền cho các trụ cột còn lại.',
    },
    {
      type: "multipleChoice",
      question:
        "Một phong trào chỉ hô hào hy sinh nhưng bỏ qua năng lực nghề nghiệp–kinh tế sẽ thiếu nhất ở trụ cột:",
      options: ["A. Dân sinh", "B. Dân trí", "C. Dân khí", "D. Danh phận"],
      answer: "A",
      explanation:
        'Nếu chỉ hô hy sinh mà bỏ nghề nghiệp–kinh tế thì thiếu "Hậu dân sinh" (nền vật chất để duy trì xã hội độc lập).',
    },
    {
      type: "multipleChoice",
      question:
        'Nếu mục tiêu là "dân quyền", hành động nào phù hợp hơn về logic?',
      options: [
        "A. Giữ dân trong ngu muội để dễ trị",
        "B. Dạy quyền–nghĩa vụ công dân",
        "C. Tôn thờ bạo lực như cứu cánh",
        "D. Đồng nhất yêu nước với phục tùng",
      ],
      answer: "B",
      explanation:
        'Dân quyền cần hiểu quyền & nghĩa vụ công dân; tài liệu nêu rõ "học về quyền và nghĩa vụ công dân".',
    },
    {
      type: "multipleChoice",
      question:
        'Lập trường "phản đối bạo động khi dân khí chưa vững" hàm ý tiêu chuẩn đánh giá hành động là:',
      options: [
        "A. Độ ồn truyền thông",
        "B. Tính bền vững độc lập",
        "C. Lợi ích nhóm nhỏ",
        "D. Sự hài lòng tức thời",
      ],
      answer: "B",
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
        "A. Thay đổi phương thức theo hoàn cảnh",
        "B. Duy trì bản chất cốt lõi",
        "C. Từ chối mọi điều chỉnh",
        "D. Lựa thời điểm để phản công",
      ],
      answer: "C",
      explanation:
        '"Nước" cốt ở thích ứng theo hoàn cảnh; "từ chối mọi điều chỉnh" mâu thuẫn nhất.',
    },
    {
      type: "multipleChoice",
      question:
        '"Tính lỏng" vừa là sức mạnh vừa là nguy cơ. Nguy cơ tinh vi nhất là:',
      options: [
        "A. Thiếu lãnh đạo",
        "B. Dễ bị hiểu nhầm là vô nguyên tắc",
        "C. Không có nguồn lực",
        "D. Không có truyền thông",
      ],
      answer: "B",
      explanation:
        'Nguy cơ tinh vi của "lỏng" là bị hiểu nhầm thành vô nguyên tắc, trong khi tài liệu nhấn "mở/đóng để giữ cốt lõi".',
    },
    // Nhóm 2 — Tam giáo dung hợp
    {
      type: "multipleChoice",
      question:
        'Nếu đặt "Tồn tại & Độc lập" làm tiêu chuẩn, hành vi nào ít phù hợp nhất với tinh thần dung hợp?',
      options: [
        "A. Gạn lọc cái hữu ích",
        "B. Điều chỉnh theo bối cảnh",
        "C. Bảo lưu cốt lõi",
        "D. Đồng nhất mọi thứ thành một",
      ],
      answer: "D",
      explanation:
        'Dung hợp là "gạn đục khơi trong", không đồng nhất mọi thứ thành một.',
    },
    {
      type: "multipleChoice",
      question:
        "Một nhà lãnh đạo tu hành nhưng vẫn quản trị biên cương và cải hóa xã hội phản ánh mạnh nhất:",
      options: [
        "A. Phật giáo yếm thế",
        "B. Phật giáo nhập thế",
        "C. Đạo giáo thần bí",
        "D. Nho giáo pháp gia",
      ],
      answer: "B",
      explanation:
        'Sự đối lập "yếm thế" với "nhập thế"; hình mẫu "đạo–đời" phản ánh Phật giáo nhập thế.',
    },
    {
      type: "multipleChoice",
      question:
        'Tư duy "trung nghĩa" (đặt Nước/Dân lên trên Vua) sẽ xử lý mâu thuẫn "lệnh vua gây hại dân" theo hướng:',
      options: [
        "A. Tuân lệnh vô điều kiện",
        "B. Ưu tiên lợi ích dân tộc",
        "C. Né tránh mọi quyết định",
        "D. Chuyển sang lợi ích cá nhân",
      ],
      answer: "B",
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
        "B. Phật – hộ quốc an dân",
        "C. Lão – nhu thắng cương",
        "D. Nho – phủ nhận trật tự",
      ],
      answer: "D",
      explanation:
        'Nho giáo gắn với trật tự/kỷ cương; "Nho = phủ nhận trật tự" là ghép sai.',
    },
    {
      type: "multipleChoice",
      question:
        'Khi nói "tránh đối đầu trực diện lúc địch mạnh", điểm nhấn nằm ở:',
      options: [
        "A. Sức mạnh vũ khí",
        "B. Quản trị nhịp độ xung đột",
        "C. Phô trương biểu tượng",
        "D. Thống nhất khẩu hiệu",
      ],
      answer: "B",
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
        "A. Chuẩn mực quốc gia được biến thành lệ sống",
        "B. Luật quốc gia bị thay bằng luật rừng",
        "C. Gia đình tách khỏi xã hội",
        "D. Cá nhân phủ nhận mọi ràng buộc",
      ],
      answer: "A",
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
        "B. Dám đấu tranh chính đáng",
        "C. Lý trí xã hội tỉnh táo",
        "D. Khát vọng vươn lên",
      ],
      answer: "C",
      explanation:
        '"Chấn dân khí" là vực dậy tự tôn & dám đấu tranh chính đáng; hiểu lệch thành cực đoan sẽ trái với "yêu nước là thức tỉnh lý trí xã hội".',
    },
    {
      type: "multipleChoice",
      question:
        'Một chương trình "mở trường dạy khoa học–kỹ thuật, giảm học từ chương, cổ vũ thực nghiệp" tương ứng mạnh nhất với:',
      options: [
        "A. Khai dân trí",
        "B. Chấn dân khí",
        "C. Hậu dân sinh",
        "D. Trung quân",
      ],
      answer: "A",
      explanation:
        'Mở trường khoa học–kỹ thuật, bỏ từ chương, cổ vũ thực nghiệp chính là mô tả "Khai dân trí".',
    },
    {
      type: "multipleChoice",
      question:
        'Trong logic của Phan Châu Trinh, "cứu nước" bền vững đòi hỏi điều kiện nào trước tiên?',
      options: [
        "A. Thắng một trận lớn",
        "B. Nâng nội lực xã hội",
        "C. Có lãnh tụ quân sự",
        "D. Cắt đứt giao thương",
      ],
      answer: "B",
      explanation:
        "Cốt lõi là nâng nội lực xã hội (tri thức, dân quyền, phát triển con người), không phải thắng 1 trận.",
    },
    {
      type: "multipleChoice",
      question:
        'Nếu một nhà nước "thối nát" không đại diện lợi ích dân tộc, lựa chọn nào giữ đúng tinh thần "dân quyền" mà vẫn tránh hỗn loạn?',
      options: [
        "A. Thần phục tuyệt đối",
        "B. Cải cách xã hội từ bên trong",
        "C. Đốt phá mọi thiết chế",
        "D. Rút lui khỏi đời sống công",
      ],
      answer: "B",
      explanation:
        "Con đường được nhấn mạnh là cải cách xã hội từ bên trong, thay vì phá hủy mọi thiết chế.",
    },
    {
      type: "multipleChoice",
      question:
        '"Hậu dân sinh" khi được ưu tiên sai cách (chỉ chạy theo giàu nhanh) sẽ làm lệch mục tiêu vì thiếu:',
      options: [
        "A. Kỷ luật lao động",
        "B. Nền đạo đức–chính trị đi kèm",
        "C. Động lực cạnh tranh",
        "D. Tăng trưởng số liệu",
      ],
      answer: "B",
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
      options: ["A. Trí–khí", "B. Khí–sinh", "C. Trí–sinh", "D. Trí–danh"],
      answer: "A",
      explanation:
        'Nếu bỏ giáo dục, "Dân trí" suy giảm kéo theo "Dân khí" (khí thế/tự tôn) khó bền; Khai dân trí làm nền, rồi mới chấn dân khí.',
    },
  ],
};

// Xuất để sử dụng trong file HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = questions;
}
