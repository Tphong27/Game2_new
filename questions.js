// ==================== NGÂN HÀNG CÂU HỎI ====================
// Chủ đề: Cội nguồn Triết học – Vũ trụ quan & Hình thái Ý thức
// Có thể chỉnh sửa, thêm bớt câu hỏi tại file này

const questions = {
  // ==================== MỨC 1 - DỄ (7 giây) ====================
  easy: [
    // Câu hỏi về Vũ trụ quan
    {
      type: "trueFalse",
      question:
        '"Vũ trụ quan" là cách con người nhìn nhận về thế giới (tự nhiên – xã hội – con người) như một chỉnh thể.',
      answer: true,
      explanation:
        "Đúng. Vũ trụ quan là cách nhìn tổng thể về thế giới, bao gồm tự nhiên, xã hội và con người.",
    },
    {
      type: "trueFalse",
      question:
        "Vũ trụ quan chỉ liên quan đến việc nghiên cứu các hành tinh và ngôi sao.",
      answer: false,
      explanation:
        "Sai. Vũ trụ quan không chỉ về thiên văn học mà là cách nhìn tổng thể về thế giới, bao gồm cả xã hội và con người.",
    },
    {
      type: "trueFalse",
      question:
        "Vũ trụ quan ảnh hưởng đến cách một dân tộc hiểu về sống – chết – cộng đồng – thiên nhiên.",
      answer: true,
      explanation:
        "Đúng. Vũ trụ quan định hình cách nhìn về mọi khía cạnh của đời sống.",
    },
    {
      type: "multipleChoice",
      question: "Vũ trụ quan của một dân tộc được hình thành chủ yếu từ:",
      options: [
        "A. Sách vở và giáo dục hiện đại",
        "B. Điều kiện tự nhiên, lịch sử và văn hóa",
        "C. Các phát minh khoa học",
        "D. Ảnh hưởng từ nước ngoài",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Vũ trụ quan được hình thành từ điều kiện sống, lịch sử và văn hóa của dân tộc đó.",
    },
    {
      type: "multipleChoice",
      question: "Vũ trụ quan có vai trò gì đối với con người?",
      options: [
        "A. Chỉ giúp giải trí",
        "B. Định hướng cách sống và hành động",
        "C. Không có vai trò gì quan trọng",
        "D. Chỉ dành cho các nhà khoa học",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Vũ trụ quan định hướng cách con người nhìn nhận và hành động trong cuộc sống.",
    },

    // Câu hỏi về Ý thức
    {
      type: "trueFalse",
      question:
        '"Hình thái ý thức" chỉ bao gồm ý thức cá nhân, không liên quan xã hội.',
      answer: false,
      explanation:
        "Sai. Hình thái ý thức bao gồm cả ý thức cá nhân và ý thức xã hội.",
    },
    {
      type: "multipleChoice",
      question: "Ý thức thường được hiểu là:",
      options: [
        "A. Một dạng vật chất hữu hình",
        "B. Sự phản ánh thế giới khách quan trong bộ não con người",
        "C. Một lực lượng siêu nhiên tách khỏi con người",
        "D. Chỉ là cảm xúc nhất thời",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Ý thức là sự phản ánh thế giới khách quan trong bộ não con người.",
    },
    {
      type: "multipleChoice",
      question: "Trong các yếu tố sau, yếu tố nào thuộc về ý thức rõ nhất?",
      options: ["A. Hòn đá", "B. Nhiệt độ", "C. Niềm tin", "D. Lượng mưa"],
      answer: "C",
      explanation:
        "Đáp án C. Niềm tin là yếu tố thuộc về ý thức, các yếu tố còn lại là vật chất.",
    },
    {
      type: "multipleChoice",
      question: "Ý thức xã hội bao gồm những gì?",
      options: [
        "A. Chỉ có pháp luật",
        "B. Quan điểm, tư tưởng, tình cảm của một cộng đồng",
        "C. Chỉ có tôn giáo",
        "D. Chỉ có đạo đức",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Ý thức xã hội là tổng hợp các quan điểm, tư tưởng, tình cảm của cộng đồng/xã hội.",
    },
    {
      type: "trueFalse",
      question:
        "Ý thức cá nhân và ý thức xã hội hoàn toàn tách biệt, không liên quan đến nhau.",
      answer: false,
      explanation:
        "Sai. Ý thức cá nhân và ý thức xã hội có mối quan hệ biện chứng, tác động qua lại lẫn nhau.",
    },

    // Câu hỏi về Triết lý Nước
    {
      type: "trueFalse",
      question:
        'Triết lý "Nước" trong tư duy Việt nhấn mạnh tính linh hoạt/thích nghi.',
      answer: true,
      explanation:
        "Đúng. Triết lý Nước thể hiện sự linh hoạt, mềm mại, thích nghi với hoàn cảnh.",
    },
    {
      type: "multipleChoice",
      question: 'Đặc điểm nào KHÔNG phải của "Triết lý Nước"?',
      options: ["A. Linh hoạt", "B. Thích nghi", "C. Cứng nhắc", "D. Bền bỉ"],
      answer: "C",
      explanation:
        "Đáp án C. Triết lý Nước đề cao sự linh hoạt, mềm dẻo, không cứng nhắc.",
    },
    {
      type: "multipleChoice",
      question:
        "Vì sao người Việt thường dùng hình ảnh 'Nước' làm biểu tượng triết học?",
      options: [
        "A. Vì Việt Nam có nhiều sông ngòi",
        "B. Vì nước dễ tìm",
        "C. Vì nước có màu đẹp",
        "D. Vì các nước khác cũng dùng",
      ],
      answer: "A",
      explanation:
        "Đáp án A. Điều kiện địa lý nhiều sông nước đã hình thành nên triết lý này.",
    },
    {
      type: "trueFalse",
      question:
        "Biểu tượng thiên nhiên như Nước chỉ mang tính văn học, không có giá trị triết học.",
      answer: false,
      explanation:
        "Sai. Biểu tượng thiên nhiên có thể chứa đựng thế giới quan và triết lý sống sâu sắc.",
    },

    // Câu hỏi tổng hợp dễ
    {
      type: "multipleChoice",
      question: "Triết học ra đời từ nhu cầu nào của con người?",
      options: [
        "A. Nhu cầu giải trí",
        "B. Nhu cầu nhận thức và giải thích thế giới",
        "C. Nhu cầu kiếm tiền",
        "D. Nhu cầu du lịch",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Triết học ra đời từ nhu cầu nhận thức, giải thích thế giới xung quanh.",
    },
    {
      type: "trueFalse",
      question:
        "Triết học chỉ dành cho các học giả, không liên quan đến đời sống thường ngày.",
      answer: false,
      explanation:
        "Sai. Triết học ảnh hưởng đến cách sống, suy nghĩ và hành động của mọi người.",
    },
    {
      type: "multipleChoice",
      question: "Yếu tố nào giúp hình thành vũ trụ quan của người Việt?",
      options: [
        "A. Khí hậu nhiệt đới, nhiều sông nước",
        "B. Sa mạc khô cằn",
        "C. Núi cao tuyết phủ",
        "D. Đồng cỏ rộng lớn",
      ],
      answer: "A",
      explanation:
        "Đáp án A. Điều kiện tự nhiên nhiệt đới, nhiều sông nước đã góp phần hình thành vũ trụ quan người Việt.",
    },
    {
      type: "multipleChoice",
      question: "Theo triết học, 'thế giới quan' bao gồm những thành phần nào?",
      options: [
        "A. Chỉ có tri thức khoa học",
        "B. Tri thức, niềm tin, lý tưởng và giá trị",
        "C. Chỉ có tôn giáo",
        "D. Chỉ có kinh nghiệm cá nhân",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Thế giới quan là hệ thống các quan điểm bao gồm tri thức, niềm tin, lý tưởng và giá trị.",
    },
    {
      type: "trueFalse",
      question:
        "Mỗi người đều có thế giới quan riêng, được hình thành qua quá trình sống và học tập.",
      answer: true,
      explanation:
        "Đúng. Thế giới quan được hình thành và phát triển trong suốt cuộc đời con người.",
    },
  ],

  // ==================== MỨC 2 - KHÓ (10 giây) ====================
  medium: [
    // Câu hỏi về mối quan hệ vũ trụ quan - ý thức
    {
      type: "trueFalse",
      question:
        "Ý thức có thể tác động ngược trở lại đời sống vật chất thông qua hành động của con người.",
      answer: true,
      explanation:
        "Đúng. Ý thức định hướng hành động, từ đó thay đổi thực tại vật chất.",
    },
    {
      type: "multipleChoice",
      question: '"Triết lý Nước" gần với kiểu vũ trụ quan nào?',
      options: ["A. Cứng nhắc – cố định", "B. Linh hoạt – thích nghi"],
      answer: "B",
      explanation:
        "Đáp án B. Triết lý Nước thể hiện tính linh hoạt, mềm dẻo, thích nghi.",
    },
    {
      type: "trueFalse",
      question:
        "Ý thức xã hội có nhiều hình thái: đạo đức, pháp luật, tôn giáo, nghệ thuật, triết học…",
      answer: true,
      explanation: "Đúng. Đây là các hình thái cơ bản của ý thức xã hội.",
    },
    {
      type: "multipleChoice",
      question:
        "Trong các yếu tố: đạo đức – pháp luật – phong tục, yếu tố nào thuộc 'hình thái ý thức xã hội'?",
      options: [
        "A. Chỉ đạo đức",
        "B. Chỉ pháp luật",
        "C. Chỉ phong tục",
        "D. Cả 3 đều thuộc",
      ],
      answer: "D",
      explanation:
        "Đáp án D. Đạo đức, pháp luật và phong tục đều là các hình thái của ý thức xã hội.",
    },
    {
      type: "multipleChoice",
      question: "Câu nào sau đây thể hiện ý thức XÃ HỘI?",
      options: [
        "A. Tôi thích ăn phở",
        "B. Người Việt đề cao tinh thần cộng đồng",
        "C. Hôm nay tôi buồn",
        "D. Tôi muốn đi du lịch",
      ],
      answer: "B",
      explanation:
        "Đáp án B. 'Người Việt đề cao tinh thần cộng đồng' là nhận định về ý thức chung của cả xã hội.",
    },
    {
      type: "multipleChoice",
      question: "Vũ trụ quan có thể tạo nền cho tinh thần yêu nước vì:",
      options: [
        "A. Nó dạy cách kiếm tiền",
        "B. Nó tạo cách nhìn về cộng đồng, cội nguồn, trách nhiệm",
        "C. Nó chỉ nói về tự nhiên",
        "D. Nó không liên quan đến yêu nước",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Vũ trụ quan định hình cách nhìn về cộng đồng, cội nguồn, từ đó hình thành tinh thần yêu nước.",
    },

    // Câu hỏi về triết học và thực tiễn
    {
      type: "multipleChoice",
      question:
        "Khi một nhóm lan truyền tin chưa kiểm chứng, cách xử lý theo 'ý thức lý tính' là:",
      options: [
        "A. Chia sẻ ngay cho nhiều người",
        "B. Kiểm chứng nguồn, đối chiếu thông tin",
        "C. Bỏ qua không quan tâm",
        "D. Tin theo số đông",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Ý thức lý tính đòi hỏi kiểm chứng, đối chiếu trước khi tin và hành động.",
    },
    {
      type: "multipleChoice",
      question:
        "Vì sao biểu tượng thiên nhiên thường được dùng để diễn đạt thế giới quan?",
      options: [
        "A. Vì khó hiểu hơn",
        "B. Vì dễ hiểu, gần đời sống, phản ánh môi trường sống",
        "C. Vì các triết gia thích thiên nhiên",
        "D. Vì không có cách khác",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Biểu tượng thiên nhiên dễ hiểu, gần gũi và phản ánh điều kiện sống của con người.",
    },
    {
      type: "trueFalse",
      question:
        "Một người sống trong xã hội không bị ảnh hưởng bởi ý thức xã hội.",
      answer: false,
      explanation:
        "Sai. Mọi cá nhân đều bị ảnh hưởng bởi ý thức xã hội thông qua giáo dục, văn hóa, truyền thông...",
    },
    {
      type: "multipleChoice",
      question:
        "Tín ngưỡng thờ cúng tổ tiên của người Việt thuộc hình thái ý thức nào?",
      options: [
        "A. Ý thức chính trị",
        "B. Ý thức tôn giáo/tín ngưỡng",
        "C. Ý thức khoa học",
        "D. Ý thức kinh tế",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Thờ cúng tổ tiên là một hình thức tín ngưỡng, thuộc ý thức tôn giáo.",
    },

    // Câu hỏi nâng cao về vũ trụ quan
    {
      type: "multipleChoice",
      question: "Câu tục ngữ 'Nước chảy đá mòn' thể hiện triết lý gì?",
      options: [
        "A. Sức mạnh của sự kiên trì, bền bỉ",
        "B. Nước rất nguy hiểm",
        "C. Đá rất yếu",
        "D. Cần tránh xa nước",
      ],
      answer: "A",
      explanation:
        "Đáp án A. Câu tục ngữ thể hiện sức mạnh của sự kiên trì - đặc tính của nước trong triết lý Việt.",
    },
    {
      type: "multipleChoice",
      question:
        "Trong triết học, 'tồn tại xã hội' và 'ý thức xã hội' có mối quan hệ như thế nào?",
      options: [
        "A. Hoàn toàn độc lập",
        "B. Tồn tại xã hội quyết định ý thức xã hội",
        "C. Ý thức xã hội quyết định tồn tại xã hội",
        "D. Không có mối quan hệ",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Theo quan điểm duy vật, tồn tại xã hội quyết định ý thức xã hội.",
    },
    {
      type: "trueFalse",
      question:
        "Ý thức xã hội có tính kế thừa - các tư tưởng cũ có thể ảnh hưởng đến tư tưởng mới.",
      answer: true,
      explanation:
        "Đúng. Ý thức xã hội có tính kế thừa, các giá trị truyền thống vẫn ảnh hưởng đến hiện tại.",
    },
    {
      type: "multipleChoice",
      question: "Thế giới quan duy vật cho rằng:",
      options: [
        "A. Ý thức có trước, vật chất có sau",
        "B. Vật chất có trước, ý thức có sau",
        "C. Ý thức và vật chất cùng xuất hiện",
        "D. Không có vật chất",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Thế giới quan duy vật khẳng định vật chất có trước, ý thức là sản phẩm của vật chất.",
    },
    {
      type: "multipleChoice",
      question: "Câu 'Một cây làm chẳng nên non' thể hiện ý thức gì?",
      options: [
        "A. Ý thức cá nhân chủ nghĩa",
        "B. Ý thức cộng đồng, đoàn kết",
        "C. Ý thức khoa học",
        "D. Ý thức tôn giáo",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Câu tục ngữ đề cao tinh thần đoàn kết, cộng đồng của người Việt.",
    },
    {
      type: "trueFalse",
      question: "Nghệ thuật là một trong các hình thái của ý thức xã hội.",
      answer: true,
      explanation:
        "Đúng. Nghệ thuật, cùng với đạo đức, pháp luật, tôn giáo, triết học... là các hình thái ý thức xã hội.",
    },
  ],

  // ==================== MỨC 3 - RẤT KHÓ (15 giây) ====================
  hard: [
    // Câu hỏi phân tích sâu
    {
      type: "multipleChoice",
      question:
        "Nếu nói 'vũ trụ quan là nền, ý thức là lực đẩy', điều này có nghĩa là:",
      options: [
        "A. Vũ trụ quan không quan trọng",
        "B. Vũ trụ quan tạo khung hiểu thế giới, ý thức chuyển thành hành động",
        "C. Ý thức không cần vũ trụ quan",
        "D. Hai khái niệm này không liên quan",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Vũ trụ quan là nền tảng nhận thức, ý thức là động lực thúc đẩy hành động.",
    },
    {
      type: "multipleChoice",
      question:
        "Có ý kiến: 'Triết lý Nước chỉ là biểu tượng văn học, không phải triết học.' Phản biện đúng nhất là:",
      options: [
        "A. Đúng, nó chỉ là văn học",
        "B. Biểu tượng có thể chứa thế giới quan, quy định cách ứng xử nên mang tính triết học",
        "C. Triết học không cần biểu tượng",
        "D. Văn học và triết học hoàn toàn tách biệt",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Biểu tượng như Nước chứa đựng thế giới quan và triết lý sống, có giá trị triết học.",
    },
    {
      type: "multipleChoice",
      question:
        "Tại sao dân tộc sống ở vùng nhiều sông nước dễ hình thành vũ trụ quan 'linh hoạt – thích nghi'?",
      options: [
        "A. Vì họ thích bơi lội",
        "B. Vì môi trường sống buộc phải thích ứng, kinh nghiệm tập thể tích lũy thành giá trị",
        "C. Vì sách vở dạy như vậy",
        "D. Vì ảnh hưởng từ nước ngoài",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Điều kiện tự nhiên buộc con người thích ứng, kinh nghiệm này được tích lũy thành hệ giá trị.",
    },
    {
      type: "multipleChoice",
      question: "Khi lòng yêu nước bị kích động bởi cảm xúc đám đông, đó là:",
      options: [
        "A. Chỉ là ý thức cá nhân",
        "B. Chỉ là ý thức xã hội",
        "C. Bắt đầu từ cá nhân nhưng lan thành hiện tượng xã hội",
        "D. Không phải ý thức",
      ],
      answer: "C",
      explanation:
        "Đáp án C. Cảm xúc bắt đầu ở cá nhân nhưng qua cơ chế lan truyền trở thành hiện tượng xã hội.",
    },
    {
      type: "multipleChoice",
      question: "Hình thái ý thức nào có thể giúp hạn chế 'yêu nước cực đoan'?",
      options: [
        "A. Kích động thêm cảm xúc",
        "B. Pháp luật, đạo đức, giáo dục phản biện",
        "C. Bỏ qua vấn đề",
        "D. Cấm mọi biểu hiện yêu nước",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Pháp luật (thượng tôn), đạo đức (tôn trọng), giáo dục (phản biện) giúp điều chỉnh ý thức.",
    },

    // Câu hỏi về triết học phương Đông
    {
      type: "multipleChoice",
      question:
        "Trong triết học phương Đông, quan niệm 'Thiên nhân hợp nhất' có nghĩa là:",
      options: [
        "A. Con người phải chinh phục tự nhiên",
        "B. Con người và tự nhiên hòa hợp, thống nhất",
        "C. Tự nhiên không quan trọng",
        "D. Con người đứng trên tự nhiên",
      ],
      answer: "B",
      explanation:
        "Đáp án B. 'Thiên nhân hợp nhất' thể hiện tư tưởng hài hòa giữa con người và tự nhiên.",
    },
    {
      type: "multipleChoice",
      question: "Tư tưởng 'Âm Dương' trong triết học phương Đông thể hiện:",
      options: [
        "A. Sự đối lập không thể hòa giải",
        "B. Sự thống nhất và chuyển hóa của các mặt đối lập",
        "C. Chỉ có tốt, không có xấu",
        "D. Thế giới là tĩnh tại",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Âm Dương thể hiện quy luật thống nhất và chuyển hóa của các mặt đối lập.",
    },
    {
      type: "multipleChoice",
      question:
        "Vũ trụ quan 'Tam tài' (Thiên - Địa - Nhân) cho thấy người Việt xưa:",
      options: [
        "A. Chỉ quan tâm đến trời",
        "B. Đặt con người trong mối quan hệ với trời và đất",
        "C. Không quan tâm đến tự nhiên",
        "D. Chỉ tin vào thần linh",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Tam tài đặt con người trong mối quan hệ hài hòa với trời (tự nhiên) và đất (môi trường).",
    },

    // Câu hỏi về ý thức và thực tiễn
    {
      type: "multipleChoice",
      question:
        "Tại sao ý thức xã hội thường 'lạc hậu' hơn so với tồn tại xã hội?",
      options: [
        "A. Vì con người không thông minh",
        "B. Vì ý thức có tính bảo thủ, kế thừa từ quá khứ",
        "C. Vì khoa học chưa phát triển",
        "D. Vì không ai quan tâm",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Ý thức xã hội có tính kế thừa và bảo thủ, nên thường thay đổi chậm hơn thực tế.",
    },
    {
      type: "multipleChoice",
      question: "Trong bối cảnh toàn cầu hóa, vũ trụ quan dân tộc có thể:",
      options: [
        "A. Hoàn toàn biến mất",
        "B. Giữ nguyên không đổi",
        "C. Tiếp biến - giữ bản sắc và tiếp thu tinh hoa",
        "D. Thay thế hoàn toàn bằng văn hóa phương Tây",
      ],
      answer: "C",
      explanation:
        "Đáp án C. Vũ trụ quan có thể tiếp biến - vừa giữ bản sắc vừa tiếp thu những giá trị mới.",
    },
    {
      type: "multipleChoice",
      question: "Câu 'Uống nước nhớ nguồn' thể hiện sự kết hợp giữa:",
      options: [
        "A. Ý thức cá nhân và lợi ích kinh tế",
        "B. Vũ trụ quan (triết lý Nước) và ý thức đạo đức (biết ơn)",
        "C. Khoa học và tôn giáo",
        "D. Pháp luật và chính trị",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Câu này kết hợp biểu tượng Nước với giá trị đạo đức biết ơn nguồn cội.",
    },
    {
      type: "multipleChoice",
      question:
        "Ý thức xã hội có thể tác động trở lại tồn tại xã hội thông qua:",
      options: [
        "A. Phép màu",
        "B. Hoạt động thực tiễn của con người",
        "C. Không thể tác động",
        "D. Chỉ qua giấc mơ",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Ý thức xã hội tác động trở lại thông qua hoạt động thực tiễn của con người.",
    },

    // Câu hỏi tổng hợp nâng cao
    {
      type: "multipleChoice",
      question: "Điểm chung giữa vũ trụ quan và ý thức xã hội là:",
      options: [
        "A. Đều là vật chất",
        "B. Đều phản ánh và chịu ảnh hưởng từ điều kiện sống",
        "C. Đều không thay đổi",
        "D. Đều chỉ tồn tại ở phương Tây",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Cả hai đều là sản phẩm tinh thần phản ánh điều kiện sống của con người.",
    },
    {
      type: "multipleChoice",
      question: "Triết học Mác-Lênin cho rằng nguồn gốc của ý thức là:",
      options: [
        "A. Thần linh ban tặng",
        "B. Bộ não người và thực tiễn xã hội",
        "C. Di truyền từ tổ tiên",
        "D. Không có nguồn gốc",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Ý thức là sản phẩm của bộ não người (nguồn gốc tự nhiên) và thực tiễn xã hội (nguồn gốc xã hội).",
    },
    {
      type: "multipleChoice",
      question:
        "Khi nói 'Nước' là biểu tượng triết học Việt, ta nhấn mạnh đặc tính nào?",
      options: [
        "A. H2O - công thức hóa học",
        "B. Nhu, thuận, linh hoạt, kiên trì, nuôi dưỡng",
        "C. Chỉ dùng để uống",
        "D. Gây ra lũ lụt",
      ],
      answer: "B",
      explanation:
        "Đáp án B. Biểu tượng Nước trong triết học Việt nhấn mạnh các đặc tính: nhu (mềm), thuận, linh hoạt, kiên trì và nuôi dưỡng sự sống.",
    },
  ],
};

// Xuất để sử dụng trong file HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = questions;
}
